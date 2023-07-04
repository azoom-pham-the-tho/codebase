export interface ActionPayload {
  payload: any;
}

export interface AuthInitState {
  loading: Boolean;
  logging: Boolean;
  user: {
    token: String;
    username: String;
  };
}
