-- Add the superadmin tier to the existing admin/client role enum.
-- Must live in its own migration: Postgres forbids using a newly added
-- enum value inside the same transaction that adds it.
ALTER TYPE public.app_role ADD VALUE 'superadmin';
