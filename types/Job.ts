export type Job = {
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: string;
  job_apply_quality_score: string;
  job_description: string;
  job_is_remote: string;
  job_posted_at_timestamp: string;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: string;
  job_longitude: string;
  job_benefits: string;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: string;
  job_required_experience: string;
  job_required_skills: string;
  job_required_education: string;
  job_experience_in_place_of_education: string;
  job_min_salary: string;
  job_max_salary: string;
  job_salary_currency: string;
  job_salary_period: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
  };
  job_job_title: string;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  estimated_salaries: string;
  apply_options: string;
  employer_reviews: string;
};
