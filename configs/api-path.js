export const API_SERVER = 'http://localhost:3005'

export const ACT_LIST = `${API_SERVER}/api/activity/`
// export const AB_ADD_POST = `${API_SERVER}/address-book/add`

// `${API_SERVER}/address-book/api/${sid}`, method: GET 取得單筆資料
export const ACT_GET_ITEM = `${API_SERVER}/api/activity/`

// 加入收藏，方法POST /${actid}
export const ACT_GET_FAV = `${API_SERVER}/api/favorite/`
// 取消收藏，方法DELETE /${actid}
export const ACT_DEL_FAV = `${API_SERVER}/api/favorite/`

export const GET_TICKET_DETAIL = `${API_SERVER}/api/ticket-detail`
export const MEM_GET_STORE = `${API_SERVER}/api/store-order/`

export const GET_PRODUCTS = `${API_SERVER}/api/products/`


// // `${API_SERVER}/address-book/api/${sid}, method: DELETE`
// export const AB_ITEM_DELETE = `${API_SERVER}/address-book/api`

// // `${API_SERVER}/address-book/api/${sid}`, method: PUT, 修改單筆資料
// export const AB_UPDATE_PUT = `${API_SERVER}/address-book/api`

// // 登入, 表單資料 {email, password}
// export const JWT_LOGIN_POST = `${API_SERVER}/login-jwt`
