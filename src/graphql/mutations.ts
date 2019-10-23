// tslint:disable
// this is an auto generated file. This will be overwritten

export const createApp = `mutation CreateApp($input: CreateAppInput!) {
  createApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    services {
      items {
        id
        title
        description
        price
        image
        duration
        start_time
        end_time
        calender_offset
      }
      nextToken
    }
  }
}
`;
export const updateApp = `mutation UpdateApp($input: UpdateAppInput!) {
  updateApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    services {
      items {
        id
        title
        description
        price
        image
        duration
        start_time
        end_time
        calender_offset
      }
      nextToken
    }
  }
}
`;
export const deleteApp = `mutation DeleteApp($input: DeleteAppInput!) {
  deleteApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    services {
      items {
        id
        title
        description
        price
        image
        duration
        start_time
        end_time
        calender_offset
      }
      nextToken
    }
  }
}
`;
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    description
    price
    image
    duration
    start_time
    end_time
    calender_offset
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
    id
    title
    description
    price
    image
    duration
    start_time
    end_time
    calender_offset
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
    id
    title
    description
    price
    image
    duration
    start_time
    end_time
    calender_offset
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const createAppointment = `mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      start_time
      end_time
      calender_offset
      app {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
export const updateAppointment = `mutation UpdateAppointment($input: UpdateAppointmentInput!) {
  updateAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      start_time
      end_time
      calender_offset
      app {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
export const deleteAppointment = `mutation DeleteAppointment($input: DeleteAppointmentInput!) {
  deleteAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      start_time
      end_time
      calender_offset
      app {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
