import Vue from 'vue'
import Router from 'vue-router'

/**
 * _import 指向视图views的页面
 */
const _import = require('./_import_' + process.env.NODE_ENV);


Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout';

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    name: "首页",
    redirect: 'index',
    hidden: true,
    children: [
      {path: 'index', component: _import('layout/test'), name: 'index'}
    ]
  },
  {
    path: '/invoicing',
    component: Layout,
    redirect: '/invoicing/basic',
    name: '进销存管理',
    icon: 'invoi',
    children: [
      {
        path: '/invoicing/basic',
        component: _import('invoicing/index'),
        redirect: '/invoicing/basic/units',
        name: '基础资料',
        children: [
          {path: 'units', component: _import('invoicing/basic/units'), name: "计量单位"},
          {path: 'fabricCategory', component: _import('invoicing/basic/fabricCategory'), name: "面料类别"},
          {path: 'fabricBasic', component: _import('invoicing/basic/fabricBasic'), name: "面料资料"},
          {path: 'storesControl', component: _import('invoicing/basic/storesControl'), name: "仓库管理"},
          {path: 'customerCategory', component: _import('invoicing/basic/customerCategory'), name: "客户分类"},
          {path: 'customerBasic', component: _import('invoicing/basic/customerBasic'), name: "客户资料"}
        ]
      },
      {
        path: '/invoicing/purchases',
        component: _import('invoicing/index'),
        redirect: '/invoicing/purchases/orders',
        name: '采购管理',
        children: [
          {path: 'orders', component: _import('invoicing/purchases/orders'), name: "采购订单"},
          {path: 'ordersStorage', component: _import('invoicing/purchases/ordersStorage'), name: "采购单入库"},
          {path: 'payoOrders', component: _import('invoicing/purchases/payoOrders'), name: "采购付款单"},
          {path: 'retreatOrder', component: _import('invoicing/purchases/retreatOrder'), name: "采购退货"},
          {path: 'bill', component: _import('invoicing/purchases/bill'), name: "采购对帐单"}
        ]
      },
      {
        path: '/invoicing/stock',
        component: _import('invoicing/index'),
        redirect: '/invoicing/stock/otherStorage',
        name: '库存管理',
        children: [
          {path: 'otherStorage', component: _import('invoicing/stock/otherStorage'), name: "其他入库"},
          {path: 'allot', component: _import('invoicing/stock/allot'), name: "库存调拨"},
          {path: 'otherIssue', component: _import('invoicing/stock/otherIssue'), name: "其他出库"}
        ]
      },
      {
        path: '/invoicing/vendition',
        component: _import('invoicing/index'),
        redirect: '/invoicing/vendition/saleOrder',
        name: '销售管理',
        children: [
          {path: 'saleOrder', component: _import('invoicing/vendition/saleOrder'), name: "销售订单"},
          {path: 'saleIssue', component: _import('invoicing/vendition/saleIssue'), name: "销售订单出库"},
          {path: 'receipt', component: _import('invoicing/vendition/receipt'), name: "销售收款单"},
          {path: 'saleRetreat', component: _import('invoicing/vendition/saleRetreat'), name: "销售退回"},
          {path: 'saleBill', component: _import('invoicing/vendition/saleBill'), name: "销售对帐单"}
        ]
      },

    ]
  }
  ];

export default new Router({
  routes: constantRouterMap
});

