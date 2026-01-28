create table recipients (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  address_line1 text not null,
  city text not null,
  zip text not null,
  email text not null,
  status text default 'waiting' check (status in ('waiting', 'fulfilled')),
  donor_order_id text
);
