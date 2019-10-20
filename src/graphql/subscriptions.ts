// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateMyApp = `subscription OnCreateMyApp {
  onCreateMyApp {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
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
export const onUpdateMyApp = `subscription OnUpdateMyApp {
  onUpdateMyApp {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
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
export const onDeleteMyApp = `subscription OnDeleteMyApp {
  onDeleteMyApp {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
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
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
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
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
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
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
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
      identityKey {
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
      identityKey {
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
      identityKey {
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
