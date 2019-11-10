// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateApp = `subscription OnCreateApp {
  onCreateApp {
    id
    appId
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    settings {
      items {
        id
        start_time
        end_time
        calender_offset
        appId
      }
      nextToken
    }
    services {
      items {
        id
        title
        description
        price
        image
        duration
        appId
      }
      nextToken
    }
  }
}
`;
export const onUpdateApp = `subscription OnUpdateApp {
  onUpdateApp {
    id
    appId
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    settings {
      items {
        id
        start_time
        end_time
        calender_offset
        appId
      }
      nextToken
    }
    services {
      items {
        id
        title
        description
        price
        image
        duration
        appId
      }
      nextToken
    }
  }
}
`;
export const onDeleteApp = `subscription OnDeleteApp {
  onDeleteApp {
    id
    appId
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    settings {
      items {
        id
        start_time
        end_time
        calender_offset
        appId
      }
      nextToken
    }
    services {
      items {
        id
        title
        description
        price
        image
        duration
        appId
      }
      nextToken
    }
  }
}
`;
export const onCreateSetting = `subscription OnCreateSetting {
  onCreateSetting {
    id
    start_time
    end_time
    calender_offset
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
  }
}
`;
export const onUpdateSetting = `subscription OnUpdateSetting {
  onUpdateSetting {
    id
    start_time
    end_time
    calender_offset
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
  }
}
`;
export const onDeleteSetting = `subscription OnDeleteSetting {
  onDeleteSetting {
    id
    start_time
    end_time
    calender_offset
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
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
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        appId
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
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        appId
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
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        appId
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
    appId
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
      appId
      app {
        id
        appId
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
    appId
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
      appId
      app {
        id
        appId
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
    appId
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
      appId
      app {
        id
        appId
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
