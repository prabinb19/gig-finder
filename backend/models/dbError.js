function getDBErrMsg(error) {
  let err_msg = error?.msg;

  return err_msg;
}

module.exports = getDBErrMsg;
