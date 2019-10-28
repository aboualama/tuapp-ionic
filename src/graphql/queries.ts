// tslint:disable
// this is an auto generated file. This will be overwritten

export const getApp = `query GetApp($id: ID!) {
  getApp(id: $id) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    settings {
      items {
        id
        calender_offset
      }
      nextToken
    }
    worktimes {
      items {
        id
        open_time
        close_time
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
        start_time
        end_time
        calender_offset
      }
      nextToken
    }
  }
}
`;
export const listApps = `query ListApps($filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
  listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      worktimes {
        nextToken
      }
      services {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSetting = `query GetSetting($id: ID!) {
  getSetting(id: $id) {
    id
    calender_offset
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      worktimes {
        nextToken
      }
      services {
        nextToken
      }
    }
  }
}
`;
export const listSettings = `query ListSettings(
  $filter: ModelSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calender_offset
      app {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
    }
    nextToken
  }
}
`;
export const getWorktime = `query GetWorktime($id: ID!) {
  getWorktime(id: $id) {
    id
    open_time
    close_time
    days {
      days
    }
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      worktimes {
        nextToken
      }
      services {
        nextToken
      }
    }
  }
}
`;
export const listWorktimes = `query ListWorktimes(
  $filter: ModelWorktimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorktimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      open_time
      close_time
      days {
        days
      }
      app {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
    }
    nextToken
  }
}
`;
export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
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
      settings {
        nextToken
      }
      worktimes {
        nextToken
      }
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
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getAppointment = `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
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
export const listAppointments = `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
