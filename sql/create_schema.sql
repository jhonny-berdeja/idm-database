create table users_idm(
    id bigserial primary key,
    email varchar(50) not null,
    pwd varchar(500) not null
);

create table roles_idm(
    id bigserial primary key,
    role_name varchar(50),
    description varchar(100)
);

create table user_roles_idm(
    user_id bigint,
    role_id bigint,
    primary key(user_id, role_id),
    constraint fk_user_id foreign key(user_id) references users_idm(id) on delete cascade,
    constraint fk_role_id foreign key(role_id) references roles_idm(id) on delete cascade
);

CREATE TABLE roster_idm (
    id bigserial primary key,
    name varchar(50) not null,
    lastname varchar(50) not null,
    email varchar(50) not null,
    user_principal_name varchar(50) not null
);
