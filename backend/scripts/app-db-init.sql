create table if not exists app_users (
  id bigserial primary key,
  username text not null unique,
  password_hash text not null,
  role text not null check (role in ('admin','gerente','funcionario')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

create table if not exists app_audit_log (
  id bigserial primary key,
  user_id bigint references app_users(id),
  action text not null,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_app_audit_log_user_id on app_audit_log(user_id);
create index if not exists idx_app_audit_log_created_at on app_audit_log(created_at);
