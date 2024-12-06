insert into users_idm (email, pwd) VALUES
  ('common@jhonnyberdeja.com', 'to_be_encoded'),
  ('rrhh@jhonnyberdeja.com', 'to_be_encoded'),
  ('createuser@jhonnyberdeja.com', 'to_be_encoded'),
  ('controlaudit@jhonnyberdeja.com', 'to_be_encoded'),
  ('admin@jhonnyberdeja.com', 'to_be_encoded');
  
insert into roles_idm (role_name, description) VALUES
  ('ROLE_COMMON', 'Cannot request access'),
  ('ROLE_RRHH', 'You can request employee registrations and cancellations'),
  ('ROLE_CREATE_USER', 'You can create users in this IDM application'),
  ('ROLE_CONTROL_AUDIT', 'You can view access and action registered'),
  ('ROLE_ADMIN', 'Can do everything');

insert into user_roles_idm (user_id, role_id) VALUES
  (1, 1),  -- 'common@jhonnyberdeja.com' -> 'ROLE_COMMON'
  (2, 2),  -- 'rrhh@jhonnyberdeja.com' -> 'ROLE_RRHH'
  (3, 3),  -- 'createuser@jhonnyberdeja.com' -> 'ROLE_CREATE_USER'
  (4, 4),  -- 'controlaudit@jhonnyberdeja.com' -> 'ROLE_CONTROL_AUDIT'
  (5, 5);  -- 'admin@jhonnyberdeja.com' -> 'ROLE_ADMIN'
