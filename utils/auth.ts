import moment from 'moment';
import { isNil, findKey } from 'lodash';

export const isUserLoggedIn = () => {};

/**
 *
 * @returns Object containing cookie key value pairs
 */
export const getCookies = () => {
  const value = '; ' + document.cookie;
  const profileIdFromCookie = value.split('; profileId=');
  const sessionTokenFromCookie = value.split('; sessionToken=');
  const sessionExpirationTSFromCookie = value.split('; sessionExpirationTS=');
  const lobbyVolumeFromCookie = value.split('; lobbyVolume=');

  let profileId: string | undefined,
    sessionToken: string | undefined,
    sessionExpirationTS: string | undefined,
    lobbyVolume: string | undefined;

  // grab the cookie if it exists
  if (profileIdFromCookie.length === 2) {
    profileId = profileIdFromCookie.pop()?.split(';')?.shift();
  }
  if (sessionTokenFromCookie.length === 2) {
    sessionToken = sessionTokenFromCookie.pop()?.split(';')?.shift();
  }
  if (sessionExpirationTSFromCookie.length === 2) {
    sessionExpirationTS = sessionExpirationTSFromCookie
      .pop()
      ?.split(';')
      ?.shift();
  }
  if (lobbyVolumeFromCookie.length === 2) {
    lobbyVolume = lobbyVolumeFromCookie.pop()?.split(';')?.shift();
  }

  return {
    profileId: profileId,
    sessionToken: sessionToken,
    sessionExpirationTS: sessionExpirationTS,
    lobbyVolume: lobbyVolume,
  };
};

/**
 *
 * @param profileId
 * @param sessionToken
 * @param sessionExpirationTS
 * @param lobbyVolume
 * @returns Whether true if all cookies exist and the sessionToken has not expired. False otherwise.
 */
export const validateSignInCookies = (
  profileId: string,
  sessionToken: string,
  sessionExpirationTS: string,
  lobbyVolume: string
) => {
  let isSessionExpirationTsValid = false;
  const now = moment().format();
  const session =
    sessionExpirationTS !== undefined && sessionExpirationTS !== null
      ? moment(sessionExpirationTS).format()
      : null;

  if (sessionExpirationTS !== undefined && sessionExpirationTS !== null) {
    if (moment(now).diff(session) < 0) {
      isSessionExpirationTsValid = true;
    }
  }
  return (
    !isNil(profileId) &&
    !isNil(sessionToken) &&
    isSessionExpirationTsValid &&
    !isNil(lobbyVolume)
  );
};

type Cookie = {
  [key: string]: string;
};

/**
 *
 * @param args List of key value pairs e.g. {profileId: "123123"}.
 * The key provided will be the key set in the cookie.
 */
export const setCookies = (...args: Cookie[]) => {
  args.forEach((cookie) => {
    const key = Object.keys(cookie)[0];
    console.log(key, cookie[key]);
    document.cookie = `${key}=${cookie[key]};max-age=${3600 * 24}`;
  });
};
