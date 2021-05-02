export const GET_POSTITS = '[/users/login] POST' 

export const postitsActions = {
    store: data => ({
      type: STORE_USER,
      payload: data
    }),
    get: data => ({
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
