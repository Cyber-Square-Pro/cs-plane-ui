
export function getHeaders() {
    const accessToken = getAccessToken();
    
    if (accessToken) {
      return {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return {}; 
  }



export function setTokens(accessToken: string, refreshToken: string) {
    const tokens = { accessToken, refreshToken };

    // Cookies.set('accessToken', accessToken);
     
    
   
}
export function getAccessToken() {

    return localStorage.getItem('accessToken')
}

export function getRefreshToken() {
    return localStorage.getItem('refreshToken')
}



