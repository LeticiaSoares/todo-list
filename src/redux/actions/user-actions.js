export const POST_USER = '[/users/login] POST' 
export const STORE_USER = '[/users/login] STORE' 
export const SUCCESS_USER = '[/users/login] SUCESS' 
export const FAIL_USER = '[/users/login] FAIL' 

export const userActions = {
    store: data => ({
      type: STORE_USER,
      payload: data
    }),
    post: data => ({
      type : POST_USER,
      payload: data
    }),
    fail: error => ({
      type: FAIL_USER,
      payload: error
    }),
    success: data => ({
      type: SUCCESS_USER,
      payload: data
    })
  }
