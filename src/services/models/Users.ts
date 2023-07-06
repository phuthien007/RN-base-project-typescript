export type UserState = {
  id?: String;
  name?: String;
  authorities?: String[];
  email?: String;
  avatar?: String;
  partnerId?: String;
  partnerName?: String;
  authorized?: Boolean; // false is default value
  loading?: Boolean;
};
