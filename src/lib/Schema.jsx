export async function createClient(client) {
  await client.query(
    `create table "Client"
    (
        email                text                                   not null,
        password             text                                   not null,
        "createdAt"          timestamp(3) default CURRENT_TIMESTAMP not null,
        "firstName"          text                                   not null,
        "isVerified"         boolean,
        "lastName"           text,
        "mobileNo"           text,
        "termsAndConditions" boolean,
        "updatedAt"          timestamp(3) default CURRENT_TIMESTAMP not null,
        last_login           timestamp    default CURRENT_TIMESTAMP not null,
        token                text
    );
    
    alter table "Client"
        owner to postgres;
    
    create unique index "Client_email_key"
        on "Client" (email);
    
    grant insert, references, select, update on "Client" to mmt;
    `
  );
}

export async function createLoginActivity(client) {
  await client.query(
    `create table login_activity
    (
        email     text,
        login_at  timestamp default CURRENT_TIMESTAMP,
        jwt_token text
    );
    
    alter table login_activity
        owner to postgres;
    
    grant insert, references, select, update on login_activity to mmt;      
    `
  );
}

export async function createPasswordReset(client) {
  await client.query(
    `create table password_reset
    (
        email                text,
        otp                  integer,
        password_reset_token text
            constraint password_reset_pk
                unique,
        created_at           timestamp default CURRENT_TIMESTAMP,
        updated_at           timestamp default CURRENT_TIMESTAMP
    );
    
    alter table password_reset
        owner to postgres;
    
    grant insert, references, select, update on password_reset to mmt;    
    `
  );
}
