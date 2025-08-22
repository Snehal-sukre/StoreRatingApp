export const validateName = (name) => {
  if (!name || name.length < 20) return "Name must be at least 20 characters";
  if (name.length > 60) return "Name must be at most 60 characters";
  return "";
};

export const validateAddress = (address) => {
  if (!address) return "Address is required";
  if (address.length > 400) return "Address must be at most 400 characters";
  return "";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email format";
  return "";
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/;
  if (!regex.test(password))
    return "Password must be 8-16 chars, include 1 uppercase and 1 special character";
  return "";
};
