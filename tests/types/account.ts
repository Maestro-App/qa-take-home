export interface IAccounts {
    event_id: number,
    id?: number,
    networking: boolean
    email: string,
    status?: string,
    external_id?: string,
    first_name: string,
    last_name: string,
    job_title?: string,
    title?: string,
    company_name?: string,
    country?: string,
    region?: string,
    city?: string,
    nationality?: string,
    category_id?: number,
    agent_id?: number,
    postcode?: string,
    address?: string,
    tel?: string,
    website?: string,
    birthdate?: string,
    exhibitor_id?: number,
    exhibitor_external_id?: string,
    member_role?: string,
    organisation_name?: string,
    organisation_id?: string,
    description?: string,
    machmaking_message?: string,
    activity_categories?: string[],
    interest_categories?: string[],
    password: string,
    twitter_page?: string,
    facebook_page?: string,
    linkedin_page?: string,
    instagram_page?: string,
    youtube_page?: string,
    default_lang?: string,
    speaker?: boolean,
    moderator?: boolean,
    send_email?: boolean,
    receiveAppointmentConfirm?: boolean,
    receiveAppointmentCancel?: boolean,
    receiveAppointmentIncoming?: boolean,
    receiveAppointmentRescheduled?: boolean,
    receiveMessageNotification?: boolean,
    custom_fields?: string,
    rebuild_categories?: boolean,
    external_barcode?: string,
    external_qr?: string
    image_url?: string
    photo?: string,
    allow_meetings?: number,
    allow_chats?: number,
    admin_assign_email?: string,
    barcode?: string,
    email_token?: string
}

export interface IAccountResponse {
    code: number,
    errors: string[],
    data: IAccountResponseData
    response_id: string
}

export interface IAccountResponseData {
    id: number,
    owner_id: number,
    username: string,
    status: number,
    external_id: string,
}
