function validateUsr(username) {
    res = /^[\da-z_]{4,16}$/.test(username) 
    return res
  }