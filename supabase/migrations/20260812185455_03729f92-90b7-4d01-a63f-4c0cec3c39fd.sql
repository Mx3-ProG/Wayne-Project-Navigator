UPDATE public.projects
SET phase = 'welcome',
    waiting_on = 'client',
    business_profile = jsonb_build_object(
      'products', COALESCE(business_profile->>'products', ''),
      'sector', COALESCE(business_profile->>'sector', '')
    ),
    business_profile_submitted_at = NULL
WHERE id = '4e77cf52-03b9-4b37-9dee-8803417cd09b';

UPDATE public.milestones SET status = 'active', completed_at = NULL
WHERE project_id = '4e77cf52-03b9-4b37-9dee-8803417cd09b' AND key = 'welcome';

UPDATE public.milestones SET status = 'upcoming', completed_at = NULL
WHERE project_id = '4e77cf52-03b9-4b37-9dee-8803417cd09b' AND key = 'brief';