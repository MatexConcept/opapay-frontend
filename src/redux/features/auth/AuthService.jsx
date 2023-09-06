import axios from "axios"

 const BACKEND_URL = "http://localhost:8000"
export const API_URL = `${BACKEND_URL}/api/users/`;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User 

const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData)
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData)
    return response.data;
}

const logout = async (userData) => {
  const response = await axios.get(API_URL + "logout")
  return response.data.message;
}

const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "loginStatus")
  return response.data;
}

const getUser = async () => {
  const response = await axios.get(API_URL + "getUser")
  return response.data;
}


const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData)
  return response.data;
}


const sendVerificationEmail = async () => {
  const response = await axios.post(API_URL + "sendVerificationEmail",)
  return response.message;
}


const verifyUser = async (verificationToken) => {
  const response = await axios.patch(`${API_URL}verifyUser/${verificationToken}`)
  return response.data.message;
}

const changePassword = async (userData) => {
  const response = await axios.patch(API_URL + "changePassword", userData)
  return response.data.message;
}

const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL + "forgotPassword", userData);

  return response.data.message;
};

const resetPassword = async (userData, resetToken) => {
  const response = await axios.patch(
    `${API_URL}resetPassword/${resetToken}`,
    userData
  );

  return response.data.message;
};

const getUsers = async () => {
  const response = await axios.get(API_URL + "getUsers");

  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};

const upgradeUser = async (userData) => {
  const response = await axios.post(API_URL + "upgradeUser", userData);

  return response.data.message;
};

const sendLoginCode = async (email) => {
  const response = await axios.post(API_URL + `sendLoginCode/${email}`);

  return response.data.message;
};


const loginWithCode = async (code, email) => {
  const response = await axios.post(API_URL + `loginWithCode/${email}`, code);

  return response.data;
};

const loginWithGoogle = async (userToken) => {
  const response = await axios.post(API_URL + "google/callback", userToken);

  return response.data;
};


const authService = {
    register,
    login,
    logout,
    getLoginStatus,
    getUser,
    updateUser,
    sendVerificationEmail,
    verifyUser,
    changePassword,
    forgotPassword,
    resetPassword,
    getUsers,
    deleteUser,
    upgradeUser,
    sendLoginCode,
    loginWithCode,
    loginWithGoogle
}
export default authService