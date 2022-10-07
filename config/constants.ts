export const REQUIRED_ERROR_MESSAGE = 'This is a required field';
export const SOCKET_EVENTS = {
  LOBBY_CONNECTION_EVENT_REQUEST: 'Event_lobby_connection_request',
  LOBBY_DISCONNECTION_EVENT_REQUEST: 'Event_lobby_disconnection_request',
  GLOBAL_JOIN_ROOM_EVENT_REQUEST: 'Event_join_socket_room_request',
  GLOBAL_LEAVE_ROOM_EVENT_REQUEST: 'Event_leave_socket_room_request',
  LOBBY_JOIN_DJ_EVENT_REQUEST: 'Event_join_dj_request',
  LOBBY_LEAVE_DJ_EVENT_REQUEST: 'Event_leave_dj_request',
  LOBBY_NEW_VIDEO_EVENT_REQUEST: 'Event_new_video_request',
  LOBBY_END_VIDEO_EVENT_REQUEST: 'Event_end_video_request',
  LOBBY_SKIP_VIDEO_EVENT_REQUEST: 'Event_skip_video_request',
  LOBBY_SEND_CHAT_EVENT_REQUEST: 'Event_send_chat_request',

  // # Response event names
  LOBBY_CONNECTION_EVENT_RESPONSE: 'Event_lobby_connection_response',
  LOBBY_DISCONNECTION_EVENT_RESPONSE: 'Event_lobby_disconnection_response',
  GLOBAL_JOIN_ROOM_EVENT_RESPONSE: 'Event_join_socket_room_response',
  GLOBAL_LEAVE_ROOM_EVENT_RESPONSE: 'Event_leave_socket_room_response',
  LOBBY_JOIN_DJ_EVENT_RESPONSE: 'Event_join_dj_response',
  LOBBY_LEAVE_DJ_EVENT_RESPONSE: 'Event_leave_dj_response',
  LOBBY_SKIP_VIDEO_EVENT_RESPONSE: 'Event_skip_video_response',

  LOBBY_NEW_VIDEO_EVENT_RESPONSE: 'Event_new_video_response',
  LOBBY_END_VIDEO_EVENT_RESPONSE: 'Event_end_video_response',

  LOBBY_NEW_USER_EVENT_RESPONSE: 'Event_new_user_response',

  LOBBY_SEND_CHAT_EVENT_RESPONSE: 'Event_send_chat_response',
};
