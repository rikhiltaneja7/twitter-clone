import { getCookie } from "./cookies";

export function loginCheck() {
  const username = getCookie("auth-token");
  if (username.length == 0) {
    return false;
  } else {
    return true;
  }
}
