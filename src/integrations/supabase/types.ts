export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15";
  };
  public: {
    Tables: {
      admin_project_assignments: {
        Row: {
          admin_id: string;
          assigned_at: string;
          project_id: string;
        };
        Insert: {
          admin_id: string;
          assigned_at?: string;
          project_id: string;
        };
        Update: {
          admin_id?: string;
          assigned_at?: string;
          project_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "admin_project_assignments_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      agreements: {
        Row: {
          content: string | null;
          created_at: string;
          id: string;
          project_id: string;
          signed_at: string | null;
          signed_name: string | null;
          title: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: string;
          project_id: string;
          signed_at?: string | null;
          signed_name?: string | null;
          title?: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: string;
          project_id?: string;
          signed_at?: string | null;
          signed_name?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "agreements_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: true;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      auth_codes: {
        Row: {
          attempt_count: number;
          code_hash: string;
          created_at: string;
          email: string;
          expires_at: string;
          id: string;
          purpose: string;
          request_ip: string | null;
          used_at: string | null;
        };
        Insert: {
          attempt_count?: number;
          code_hash: string;
          created_at?: string;
          email: string;
          expires_at: string;
          id?: string;
          purpose?: string;
          request_ip?: string | null;
          used_at?: string | null;
        };
        Update: {
          attempt_count?: number;
          code_hash?: string;
          created_at?: string;
          email?: string;
          expires_at?: string;
          id?: string;
          purpose?: string;
          request_ip?: string | null;
          used_at?: string | null;
        };
        Relationships: [];
      };
      briefs: {
        Row: {
          answers: Json;
          categories: string[];
          created_at: string;
          current_step: number;
          id: string;
          project_id: string;
          project_type: string | null;
          submitted_at: string | null;
          unsure: boolean;
          updated_at: string;
        };
        Insert: {
          answers?: Json;
          categories?: string[];
          created_at?: string;
          current_step?: number;
          id?: string;
          project_id: string;
          project_type?: string | null;
          submitted_at?: string | null;
          unsure?: boolean;
          updated_at?: string;
        };
        Update: {
          answers?: Json;
          categories?: string[];
          created_at?: string;
          current_step?: number;
          id?: string;
          project_id?: string;
          project_type?: string | null;
          submitted_at?: string | null;
          unsure?: boolean;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "briefs_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: true;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      billing_settings: {
        Row: {
          default_deposit_percentage: number;
          id: number;
          updated_at: string;
          updated_by: string | null;
        };
        Insert: {
          default_deposit_percentage?: number;
          id?: number;
          updated_at?: string;
          updated_by?: string | null;
        };
        Update: {
          default_deposit_percentage?: number;
          id?: number;
          updated_at?: string;
          updated_by?: string | null;
        };
        Relationships: [];
      };
      clients: {
        Row: {
          created_at: string;
          id: string;
          industry: string | null;
          logo_url: string | null;
          name: string;
          stripe_customer_id: string | null;
          updated_at: string;
          website: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          industry?: string | null;
          logo_url?: string | null;
          name: string;
          stripe_customer_id?: string | null;
          updated_at?: string;
          website?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          industry?: string | null;
          logo_url?: string | null;
          name?: string;
          stripe_customer_id?: string | null;
          updated_at?: string;
          website?: string | null;
        };
        Relationships: [];
      };
      payment_requests: {
        Row: {
          amount: number;
          canceled_at: string | null;
          client_id: string;
          created_at: string;
          created_by: string | null;
          currency: string;
          id: string;
          idempotency_key: string;
          invoice_id: string;
          method: string;
          paid_at: string | null;
          project_id: string;
          rib_id: string | null;
          status: string;
          stripe_payment_intent_id: string | null;
          type: string;
        };
        Insert: {
          amount: number;
          canceled_at?: string | null;
          client_id: string;
          created_at?: string;
          created_by?: string | null;
          currency?: string;
          id?: string;
          idempotency_key: string;
          invoice_id: string;
          method?: string;
          paid_at?: string | null;
          project_id: string;
          rib_id?: string | null;
          status?: string;
          stripe_payment_intent_id?: string | null;
          type: string;
        };
        Update: {
          amount?: number;
          canceled_at?: string | null;
          client_id?: string;
          created_at?: string;
          created_by?: string | null;
          currency?: string;
          id?: string;
          idempotency_key?: string;
          invoice_id?: string;
          method?: string;
          paid_at?: string | null;
          project_id?: string;
          rib_id?: string | null;
          status?: string;
          stripe_payment_intent_id?: string | null;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: "payment_requests_invoice_id_fkey";
            columns: ["invoice_id"];
            isOneToOne: false;
            referencedRelation: "invoices";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payment_requests_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payment_requests_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payment_requests_rib_id_fkey";
            columns: ["rib_id"];
            isOneToOne: false;
            referencedRelation: "payment_ribs";
            referencedColumns: ["id"];
          },
        ];
      };
      documents: {
        Row: {
          created_at: string;
          i18n_key: string | null;
          id: string;
          name: string;
          name_override: string | null;
          project_id: string;
          status: Database["public"]["Enums"]["doc_status"];
          type: string;
          url: string | null;
        };
        Insert: {
          created_at?: string;
          i18n_key?: string | null;
          id?: string;
          name: string;
          name_override?: string | null;
          project_id: string;
          status?: Database["public"]["Enums"]["doc_status"];
          type: string;
          url?: string | null;
        };
        Update: {
          created_at?: string;
          i18n_key?: string | null;
          id?: string;
          name?: string;
          name_override?: string | null;
          project_id?: string;
          status?: Database["public"]["Enums"]["doc_status"];
          type?: string;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "documents_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      feedback: {
        Row: {
          allow_case_study: boolean;
          allow_testimonial: boolean;
          comment: string | null;
          created_at: string;
          id: string;
          project_id: string;
          rating: number;
          user_id: string;
        };
        Insert: {
          allow_case_study?: boolean;
          allow_testimonial?: boolean;
          comment?: string | null;
          created_at?: string;
          id?: string;
          project_id: string;
          rating: number;
          user_id: string;
        };
        Update: {
          allow_case_study?: boolean;
          allow_testimonial?: boolean;
          comment?: string | null;
          created_at?: string;
          id?: string;
          project_id?: string;
          rating?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "feedback_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      invoices: {
        Row: {
          amount: number;
          created_at: string;
          currency: string;
          deposit_amount: number | null;
          deposit_percentage: number | null;
          deposit_type: string | null;
          due_date: string | null;
          i18n_key: string | null;
          id: string;
          label: string;
          label_override: string | null;
          paid_at: string | null;
          paid_total: number;
          payment_status: string;
          payment_url: string | null;
          project_id: string;
          reconciliation_flag: boolean;
          reference: string | null;
          status: Database["public"]["Enums"]["invoice_status"];
        };
        Insert: {
          amount?: number;
          created_at?: string;
          currency?: string;
          deposit_amount?: number | null;
          deposit_percentage?: number | null;
          deposit_type?: string | null;
          due_date?: string | null;
          i18n_key?: string | null;
          id?: string;
          label: string;
          label_override?: string | null;
          paid_at?: string | null;
          paid_total?: number;
          payment_status?: string;
          payment_url?: string | null;
          project_id: string;
          reconciliation_flag?: boolean;
          reference?: string | null;
          status?: Database["public"]["Enums"]["invoice_status"];
        };
        Update: {
          amount?: number;
          created_at?: string;
          currency?: string;
          deposit_amount?: number | null;
          deposit_percentage?: number | null;
          deposit_type?: string | null;
          due_date?: string | null;
          i18n_key?: string | null;
          id?: string;
          label?: string;
          label_override?: string | null;
          paid_at?: string | null;
          paid_total?: number;
          payment_status?: string;
          payment_url?: string | null;
          project_id?: string;
          reconciliation_flag?: boolean;
          reference?: string | null;
          status?: Database["public"]["Enums"]["invoice_status"];
        };
        Relationships: [
          {
            foreignKeyName: "invoices_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      payment_ribs: {
        Row: {
          active: boolean;
          created_at: string;
          created_by: string;
          holder_name: string;
          id: string;
          label: string;
          vault_secret_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          created_by: string;
          holder_name: string;
          id?: string;
          label: string;
          vault_secret_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          created_by?: string;
          holder_name?: string;
          id?: string;
          label?: string;
          vault_secret_id?: string;
        };
        Relationships: [];
      };
      milestones: {
        Row: {
          completed_at: string | null;
          created_at: string;
          description: string | null;
          due_date: string | null;
          id: string;
          key: string;
          position: number;
          project_id: string;
          status: Database["public"]["Enums"]["step_status"];
          title: string;
          title_override: string | null;
        };
        Insert: {
          completed_at?: string | null;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          key: string;
          position?: number;
          project_id: string;
          status?: Database["public"]["Enums"]["step_status"];
          title: string;
          title_override?: string | null;
        };
        Update: {
          completed_at?: string | null;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          key?: string;
          position?: number;
          project_id?: string;
          status?: Database["public"]["Enums"]["step_status"];
          title?: string;
          title_override?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "milestones_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      offers: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          project_id: string;
          published_at: string | null;
          status: string;
          stripe_url: string | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          project_id: string;
          published_at?: string | null;
          status?: string;
          stripe_url?: string | null;
          title?: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          project_id?: string;
          published_at?: string | null;
          status?: string;
          stripe_url?: string | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "offers_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      packages: {
        Row: {
          active: boolean;
          category: string | null;
          description: string | null;
          id: string;
          name: string;
          position: number;
          price_from: number | null;
        };
        Insert: {
          active?: boolean;
          category?: string | null;
          description?: string | null;
          id?: string;
          name: string;
          position?: number;
          price_from?: number | null;
        };
        Update: {
          active?: boolean;
          category?: string | null;
          description?: string | null;
          id?: string;
          name?: string;
          position?: number;
          price_from?: number | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          company: string | null;
          created_at: string;
          email: string | null;
          full_name: string | null;
          goal: string | null;
          id: string;
          onboarded: boolean;
          phone: string | null;
          updated_at: string;
        };
        Insert: {
          company?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          goal?: string | null;
          id: string;
          onboarded?: boolean;
          phone?: string | null;
          updated_at?: string;
        };
        Update: {
          company?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          goal?: string | null;
          id?: string;
          onboarded?: boolean;
          phone?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      project_links: {
        Row: {
          created_at: string;
          icon: string | null;
          id: string;
          name: string;
          project_id: string;
          status: string;
          type: string;
          url: string;
        };
        Insert: {
          created_at?: string;
          icon?: string | null;
          id?: string;
          name: string;
          project_id: string;
          status?: string;
          type?: string;
          url: string;
        };
        Update: {
          created_at?: string;
          icon?: string | null;
          id?: string;
          name?: string;
          project_id?: string;
          status?: string;
          type?: string;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_links_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      project_members: {
        Row: {
          created_at: string;
          id: string;
          project_id: string;
          role: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          project_id: string;
          role?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          project_id?: string;
          role?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      project_notes: {
        Row: {
          author_id: string;
          body: string;
          created_at: string;
          id: string;
          kind: string;
          project_id: string;
          updated_at: string;
        };
        Insert: {
          author_id: string;
          body: string;
          created_at?: string;
          id?: string;
          kind?: string;
          project_id: string;
          updated_at?: string;
        };
        Update: {
          author_id?: string;
          body?: string;
          created_at?: string;
          id?: string;
          kind?: string;
          project_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_notes_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      projects: {
        Row: {
          business_profile: Json;
          business_profile_submitted_at: string | null;
          client_id: string;
          created_at: string;
          deadline: string | null;
          delivered_at: string | null;
          id: string;
          name: string;
          package_name: string | null;
          paid_amount: number;
          phase: Database["public"]["Enums"]["project_phase"];
          progress: number;
          project_manager: string | null;
          project_url: string | null;
          start_date: string | null;
          total_amount: number;
          updated_at: string;
          waiting_on: Database["public"]["Enums"]["waiting_on"];
          welcome_checklist: Json;
        };
        Insert: {
          business_profile?: Json;
          business_profile_submitted_at?: string | null;
          client_id: string;
          created_at?: string;
          deadline?: string | null;
          delivered_at?: string | null;
          id?: string;
          name: string;
          package_name?: string | null;
          paid_amount?: number;
          phase?: Database["public"]["Enums"]["project_phase"];
          progress?: number;
          project_manager?: string | null;
          project_url?: string | null;
          start_date?: string | null;
          total_amount?: number;
          updated_at?: string;
          waiting_on?: Database["public"]["Enums"]["waiting_on"];
          welcome_checklist?: Json;
        };
        Update: {
          business_profile?: Json;
          business_profile_submitted_at?: string | null;
          client_id?: string;
          created_at?: string;
          deadline?: string | null;
          delivered_at?: string | null;
          id?: string;
          name?: string;
          package_name?: string | null;
          paid_amount?: number;
          phase?: Database["public"]["Enums"]["project_phase"];
          progress?: number;
          project_manager?: string | null;
          project_url?: string | null;
          start_date?: string | null;
          total_amount?: number;
          updated_at?: string;
          waiting_on?: Database["public"]["Enums"]["waiting_on"];
          welcome_checklist?: Json;
        };
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          id: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          id?: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      admin_list_projects: {
        Args: never;
        Returns: {
          agreement_signed_at: string;
          brief_categories: string[];
          brief_submitted_at: string;
          brief_type: string | null;
          business_profile: Json;
          business_profile_submitted_at: string;
          client_name: string;
          company: string;
          created_at: string;
          email: string;
          full_name: string;
          offer_status: string;
          paid_amount: number;
          phase: Database["public"]["Enums"]["project_phase"];
          progress: number;
          project_id: string;
          project_name: string;
          total_amount: number;
          waiting_on: Database["public"]["Enums"]["waiting_on"];
        }[];
      };
      advance_project: {
        Args: {
          _phase: Database["public"]["Enums"]["project_phase"];
          _progress: number;
          _project_id: string;
          _waiting_on: Database["public"]["Enums"]["waiting_on"];
        };
        Returns: undefined;
      };
      complete_welcome: { Args: { _project_id: string }; Returns: undefined };
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
      is_admin_or_above: { Args: { _user_id: string }; Returns: boolean };
      is_client_member: { Args: { _client_id: string }; Returns: boolean };
      is_project_admin: { Args: { _project_id: string }; Returns: boolean };
      is_project_member: { Args: { _project_id: string }; Returns: boolean };
      is_superadmin: { Args: { _user_id: string }; Returns: boolean };
      mark_invoice_paid: { Args: { _invoice_id: string }; Returns: undefined };
      set_invoice_deposit: {
        Args: { _deposit_type: string; _deposit_value: number; _invoice_id: string };
        Returns: undefined;
      };
      set_default_deposit_percentage: { Args: { _pct: number }; Returns: undefined };
      create_payment_request: {
        Args: {
          _amount: number;
          _idempotency_key: string;
          _invoice_id: string;
          _method?: string;
          _rib_id?: string;
          _type: string;
        };
        Returns: string;
      };
      cancel_payment_request: { Args: { _id: string }; Returns: undefined };
      recompute_invoice_totals: { Args: { _invoice_id: string }; Returns: undefined };
      service_confirm_payment_request: {
        Args: { _payment_intent_id: string };
        Returns: undefined;
      };
      service_fail_payment_request: { Args: { _payment_intent_id: string }; Returns: undefined };
      service_cancel_payment_request_by_pi: {
        Args: { _payment_intent_id: string };
        Returns: undefined;
      };
      service_refund_payment_request: { Args: { _payment_intent_id: string }; Returns: undefined };
      record_stripe_event: {
        Args: { _id: string; _payload: Json; _type: string };
        Returns: boolean;
      };
      get_rib_details: {
        Args: { _project_id: string; _rib_id: string };
        Returns: { bic: string | null; holder_name: string; iban: string; label: string }[];
      };
      reopen_brief: { Args: { _project_id: string }; Returns: undefined };
      save_business_profile: {
        Args: { _profile: Json; _project_id: string; _submit?: boolean };
        Returns: undefined;
      };
      save_offer: {
        Args: {
          _description: string;
          _project_id: string;
          _publish?: boolean;
          _stripe_url: string;
          _title: string;
        };
        Returns: undefined;
      };
      save_welcome_checklist: {
        Args: { _checklist: Json; _project_id: string };
        Returns: undefined;
      };
      sign_agreement: {
        Args: { _name: string; _project_id: string };
        Returns: undefined;
      };
      submit_brief: {
        Args: {
          _answers: Json;
          _categories?: string[] | null;
          _project_id: string;
          _project_type?: string | null;
          _unsure?: boolean;
        };
        Returns: undefined;
      };
      superadmin_create_rib: {
        Args: { _bic: string; _holder_name: string; _iban: string; _label: string };
        Returns: string;
      };
      superadmin_delete_rib: { Args: { _rib_id: string }; Returns: undefined };
      superadmin_set_rib_active: {
        Args: { _active: boolean; _rib_id: string };
        Returns: undefined;
      };
      superadmin_update_rib: {
        Args: {
          _bic: string;
          _holder_name: string;
          _iban: string;
          _label: string;
          _rib_id: string;
        };
        Returns: undefined;
      };
      superadmin_revoke_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _target_user_id: string;
        };
        Returns: undefined;
      };
      superadmin_set_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _target_user_id: string;
        };
        Returns: undefined;
      };
      sync_milestones: {
        Args: {
          _phase: Database["public"]["Enums"]["project_phase"];
          _project_id: string;
        };
        Returns: undefined;
      };
      unpublish_offer: { Args: { _project_id: string }; Returns: undefined };
    };
    Enums: {
      app_role: "admin" | "client" | "superadmin";
      doc_status: "signed" | "waiting" | "completed" | "available";
      invoice_status: "paid" | "waiting" | "upcoming";
      project_phase:
        | "agreement"
        | "welcome"
        | "deposit"
        | "brief"
        | "launch"
        | "production"
        | "review"
        | "delivery"
        | "live";
      step_status: "done" | "active" | "upcoming";
      waiting_on: "client" | "wayne";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "client", "superadmin"],
      doc_status: ["signed", "waiting", "completed", "available"],
      invoice_status: ["paid", "waiting", "upcoming"],
      project_phase: [
        "agreement",
        "welcome",
        "deposit",
        "brief",
        "launch",
        "production",
        "review",
        "delivery",
        "live",
      ],
      step_status: ["done", "active", "upcoming"],
      waiting_on: ["client", "wayne"],
    },
  },
} as const;
