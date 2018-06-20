var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5433833871803344,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9850364899998993,
          "pitch": 0,
          "rotation": 0,
          "target": "1-habitacion-master"
        },
        {
          "yaw": 2.8867651099997262,
          "pitch": 0,
          "rotation": 0,
          "target": "2-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-habitacion-master",
      "name": "Habitacion Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.392683017180163,
          "pitch": 0,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacion-2",
      "name": "Habitacion 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.7257166971798554,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6837941800000191,
          "pitch": 0,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vistas de Masferrer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
