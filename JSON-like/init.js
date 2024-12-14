db = db.getSiblingDB('db-mongodb-jberdeja');
db.applications.insertMany([
  {
    "_id": ObjectId(),
    "name": "Application 1",
    "description": "Description of Application 1",
    "roles": [
      {
        "accessData": {
          "name": "Admin",
          "possibleValues": ["read", "write", "delete"],
          "description": "Administrator role with full access"
        },
        "contexts": [
          {
            "name": "Region",
            "possibleValues": ["NA", "EU", "APAC"],
            "description": "Regional access context"
          },
          {
            "name": "Department",
            "possibleValues": ["HR", "IT", "Finance"],
            "description": "Department-level access"
          }
        ]
      },
      {
        "accessData": {
          "name": "User",
          "possibleValues": ["read", "write"],
          "description": "Regular user role with limited access"
        },
        "contexts": [
          {
            "name": "Project",
            "possibleValues": ["Project A", "Project B"],
            "description": "Project-specific access context"
          }
        ]
      }
    ]
  },
  {
    "_id": ObjectId(),
    "name": "Application 2",
    "description": "Description of Application 2",
    "roles": [
      {
        "accessData": {
          "name": "Viewer",
          "possibleValues": ["read"],
          "description": "Viewer role with read-only access"
        },
        "contexts": [
          {
            "name": "Team",
            "possibleValues": ["Team X", "Team Y"],
            "description": "Team-specific access context"
          }
        ]
      }
    ]
  }
]);

db = db.getSiblingDB("my_database"); // Nombre de tu base de datos
db.access_management_documentation.insertMany([
  {
    "_id": ObjectId(),
    "documentationNumber": 1,
    "documentationId": "DOC001",
    "requestType": "Create",
    "accessManagementCreator": {
      "names": "John",
      "lastnames": "Doe",
      "email": "john.doe@example.com",
      "userPrincipalName": "jdoe"
    },
    "accessManagementFor": {
      "names": "Jane",
      "lastnames": "Smith",
      "email": "jane.smith@example.com",
      "userPrincipalName": "jsmith"
    },
    "transitions": [
      {
        "number": 1,
        "transitioner": {
          "names": "Admin",
          "lastnames": "User",
          "email": "admin.user@example.com",
          "userPrincipalName": "admin"
        },
        "currentStatus": "Pending",
        "originStatus": "New",
        "dateTransition": ISODate("2024-12-14T00:00:00Z"),
        "followingPossibleStates": ["Approved", "Rejected"]
      }
    ],
    "lastUpdateDate": ISODate("2024-12-14T00:00:00Z"),
    "documentCreationDate": ISODate("2024-12-13T12:00:00Z"),
    "application": {
      "name": "Application 1",
      "roles": [
        {
          "features": {
            "name": "Admin Feature",
            "value": "Full Access"
          },
          "contexts": [
            {
              "name": "Region Context",
              "value": "Global"
            }
          ]
        }
      ]
    }
  },
  {
    "_id": ObjectId(),
    "documentationNumber": 2,
    "documentationId": "DOC002",
    "requestType": "Update",
    "accessManagementCreator": {
      "names": "Alice",
      "lastnames": "Johnson",
      "email": "alice.johnson@example.com",
      "userPrincipalName": "ajohnson"
    },
    "accessManagementFor": {
      "names": "Bob",
      "lastnames": "Williams",
      "email": "bob.williams@example.com",
      "userPrincipalName": "bwilliams"
    },
    "transitions": [
      {
        "number": 1,
        "transitioner": {
          "names": "Manager",
          "lastnames": "User",
          "email": "manager.user@example.com",
          "userPrincipalName": "manager"
        },
        "currentStatus": "Approved",
        "originStatus": "Pending",
        "dateTransition": ISODate("2024-12-13T10:00:00Z"),
        "followingPossibleStates": ["Completed"]
      },
      {
        "number": 2,
        "transitioner": {
          "names": "Auditor",
          "lastnames": "User",
          "email": "auditor.user@example.com",
          "userPrincipalName": "auditor"
        },
        "currentStatus": "Completed",
        "originStatus": "Approved",
        "dateTransition": ISODate("2024-12-14T14:00:00Z"),
        "followingPossibleStates": []
      }
    ],
    "lastUpdateDate": ISODate("2024-12-14T14:00:00Z"),
    "documentCreationDate": ISODate("2024-12-13T08:00:00Z"),
    "application": {
      "name": "Application 2",
      "roles": [
        {
          "features": {
            "name": "User Feature",
            "value": "Limited Access"
          },
          "contexts": [
            {
              "name": "Department Context",
              "value": "Finance"
            }
          ]
        }
      ]
    }
  }
]);
