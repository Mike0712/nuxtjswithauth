import apiclient from "@/apiclient";

export const fetchUsers = async (params) => {
  let url = '/users';
  if (params.token) {
    url += '?token=' + params.token;
  }
  return await apiclient.get(url)
}

export const fetchOneUser = async (params) => {
  let url = '/users/' + params.id;
  if (params.token) {
    url += '?token=' + params.token;
  }
  return await apiclient.get(url)
}

export const singIn = async (email, password) => {
  let res = await apiclient.get('/signin?email=' + email + '&password=' + password);
  return res;
}
