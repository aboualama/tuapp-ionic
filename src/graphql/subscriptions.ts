// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateApp = `subscription OnCreateApp {
  onCreateApp {
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateApp = `subscription OnUpdateApp {
  onUpdateApp {
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
      }
      nextToken
    }
  }
}
`;
export const onDeleteApp = `subscription OnDeleteApp {
  onDeleteApp {
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
      }
      nextToken
    }
  }
}
`;
export const onCreateService = `subscription OnCreateService {
  onCreateService {
    id
    title
    description
    price
    image
    duration
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
    id
    title
    description
    price
    image
    duration
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
    id
    title
    description
    price
    image
    duration
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
export const onCreateAppointment = `subscription OnCreateAppointment {
  onCreateAppointment {
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
export const onUpdateAppointment = `subscription OnUpdateAppointment {
  onUpdateAppointment {
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
export const onDeleteAppointment = `subscription OnDeleteAppointment {
  onDeleteAppointment {
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
