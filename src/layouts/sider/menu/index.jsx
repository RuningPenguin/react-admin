import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import {Link, withRouter} from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import {connect} from "react-redux";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {addTag} from "@/store/action";
import {getMenuItemInMenuListByProperty} from "@/tools";
import "./index.less";
import {getMenu_api} from "@/api/config";

const SubMenu = Menu.SubMenu;
// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};


const Meun = (props) => {
  const {location, role, addTag} = props;
  const path = location.pathname;
  const [menuTreeNode, setMenuTreeNode] = useState([]);
  const [openKey, setOpenKey] = useState([]);


  // filterMenuItem用来根据配置信息筛选可以显示的菜单项
  const filterMenuItem = (item) => {
    const {roles} = item;
    if (role === "admin" || !roles || roles.includes(role)) {
      return true;
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      return !!item.children.find((child) => roles.includes(child.role));
    }
    return false;
  };
  // 菜单渲染
  const getMenuNodes = (menuList) => {
    // 得到当前请求的路由路径
    return menuList.reduce((pre, item) => {
      if (filterMenuItem(item)) {
        if (!item.children) {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {/*{item.icon ? <Icon type={item.icon} /> : null}*/}
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(
            (cItem) => path.indexOf(cItem.path) === 0
          );
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            setOpenKey((state) => [...state, item.path]);
          }

          // 向pre添加<SubMenu>
          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  {/*{item.icon ? <Icon type={item.icon} /> : null}*/}
                  <span>{item.title}</span>
                </span>
              }
            >
              {getMenuNodes(item.children)}
            </SubMenu>
          );
        }
      }

      return pre;
    }, []);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const _items = reorder(
      this.state.menuTreeNode,
      result.source.index,
      result.destination.index
    );
    this.setState({
      menuTreeNode: _items
    });
  };

  const handleMenuSelect = ({key = "/home"}, menuList) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, "path", key);
    addTag(menuItem);
  };

  useEffect(() => {
    (async function () {
      let res = await getMenu_api();
      const menuTreeNode = getMenuNodes(res);
      setMenuTreeNode(menuTreeNode);
      handleMenuSelect(openKey, res);
    })();

  }, []);


  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {menuTreeNode.map((item, index) => (
                  <Draggable
                    key={item.key}
                    draggableId={item.key}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Menu
                          mode="inline"
                          theme="dark"
                          onSelect={handleMenuSelect}
                          selectedKeys={[path]}
                          defaultOpenKeys={openKey}
                        >
                          {item}
                        </Menu>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Scrollbars>
    </div>
  );

};


export default connect((state) => state.user, {addTag})(withRouter(Meun));
