
class Usuario {
  constructor(
    password,
    id,
    investor_name,
    city,
    country,
    email,
    balance,
    photo,
    first_access,
    super_angel,
    portfolio_value,
    enterprise
  ) {
    this.password = password;
    this.id = id;
    this.investor_name = investor_name;
    this.city = city;
    this.email = email;
    this.balance = balance;
    this.photo = photo;
    this.first_access = first_access;
    this.super_angel = super_angel;
    this.password = password;
    this.portfolio_value = portfolio_value;
    this.country = country;
    this.enterprise = enterprise;
  }

  toJson() {
    return {
      nome: this.nome,
      id: this.nome
    };
  }

  static fromJson(user) {
    return new Usuario(
      user.password == null ? null : user.password,
      user.id == null ? null : user.id,
      user.investor_name,
      user.city,
      user.country,
      user.email,
      user.balance,
      user.photo,
      user.first_access,
      user.super_angel,
      user.portfolio_value,
      user.enterprise
    );
  }

  static fromGraphQL(user) {
    return {
      id: user.usr_id,
      investor_name: user.investor_name,
      email: user.email,
      city: user.city,
      country: user.country,
      photo: user.photo,
      portfolio: null,
      portfolio_value: user.portfolio_value,
      first_access: user.first_access,
      super_angel: user.super_angel
    };
  }

  toGraphQL() {
    return `{
        investor_name: "${this.investor_name}", 
        email: "${this.email}", 
        city: "${this.city}", 
        country: "${this.country}",
        balance: "${this.balance}",  
        photo:"${this.photo}", 
        password: "${this.password}"
        portfolio_value: "${this.portfolio_value}",
        portfolios: {data: {enterprises_number: 0}}       
      }`;
  }

  static getByEmail(email) {
    return `{
        user(where: {email: {_eq: "${email}"}}) {
          balance
          city
          country
          email
          first_access
          id
          investor_name
          password
          photo
          portfolio_value
          super_angel
        }
      }
      `;
  }

  insert() {
    return `mutation {
          insert_user(objects: ${this.toGraphQL()}) {
            affected_rows
          }
        }`;
  }

  update() {
    return `mutation {
          update_user(where: {usr_id: {_eq:${
      this.id
      }}}, _set: ${this.toGraphQLUpdate()}) {
            affected_rows
          }
        }
          `;
  }
}

module.exports = { Usuario };
