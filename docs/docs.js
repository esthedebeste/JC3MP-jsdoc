
/**
 * @class
 * 
 */
var Camera = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {number}
     */
    this.fieldOfView = null;
    /**
     * @type {boolean}
     */
    this.attachedToPlayer = null;
  }
}

/**
 * @class
 * Destroys the Checkpoint
 */
var Checkpoint = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.modelHash = null;
    /**
     * @type {number}
     */
    this.type = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {number}
     */
    this.radius = null;
    /**
     * @type {boolean}
     */
    this.visible = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * 
 */
var EventInstance = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {boolean}
     */
    this.oneShot = null;
  }
}

/**
 * @class
 * The EventSystem is used to communicate between client packages and to the server.
 */
var EventSystem = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {function}
     */
    this.handler = null;
  }
  /**
   * Adds an event handler
	 * 
	 * **returns:** _{@link EventInstance}_
	 * 
	 * 
   * @param {string} name - the event name
	 * @param {function} handler - the function to execute when the event is called
   * @returns {EventInstance}
   */
  Add(name,handler){}
  /**
   * Calls an Event.
	 * 
	 * 
	 * 
	 * This function always returns an array with all return values from all event handlers for that name.
	 * 
	 * **returns:** _Array_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {Array}
   */
  Call(name,...args){}
  /**
   * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | {@link EventInstance} |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  Remove(){}
  /**
   * EventSystem.RemoveAll(string p1)
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | string |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  RemoveAll(){}
  /**
   * EventSystem.AddRemoteCallable(string name, function handler)
	 * 
	 * Adds an event that can be called from the server.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | name | string | the event name |
	 * 
	 * | handler | function | the function to execute when the event is called |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.AddRemoteCallable('MyEvent', () => { print(`the server called MyEvent!`); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  AddRemoteCallable(){}
  /**
   * EventSystem.CallRemote(string name, any ...args)
	 * 
	 * Calls an Event on the server scripts. Other than the normal ```js
	 * 
	 * Call
	 * 
	 * ``` function, this function does not return anything.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | name | string | event name |
	 * 
	 * | ...args | any | optional event arguments |
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  CallRemote(){}
}

/**
 * @class
 * Destroys the HealthEffect
 */
var HealthEffect = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.regenRate = null;
    /**
     * @type {number}
     */
    this.regenCooldown = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * Global JCMP class. Use jcmp in your script.
 */
var JCMPNamespace = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Array<Package>}
     */
    this.packages = null;
    /**
     * @type {EventSystem}
     */
    this.events = null;
    /**
     * @type {number}
     */
    this.networkVersion = null;
    /**
     * @type {string}
     */
    this.version = null;
    /**
     * @type {Array}
     */
    this.approvedWebsites = null;
    /**
     * @type {JCMPUINamespace}
     */
    this.ui = null;
    /**
     * @type {Vector2f}
     */
    this.viewportSize = null;
    /**
     * @type {LocalPlayer}
     */
    this.localPlayer = null;
    /**
     * @type {Array<NetworkPlayer>}
     */
    this.players = null;
    /**
     * @type {World}
     */
    this.world = null;
    /**
     * @type {Settings}
     */
    this.settings = null;
    /**
     * @type {Array}
     */
    this.vehicles = null;
  }
  /**
   * Prints a message to scripting.log.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | message | string | Message to append to scripting.log |
	 * 
	 * 
   * 
   * @returns {}
   */
  print(){}
  /**
   * JCMPNamespace.printLog(string filename, string message)
	 * 
	 * Outputs message to a specified file.
	 * 
	 * Parameter
	 * 
	 * 
   * 
   * @returns {}
   */
  printLog(){}
}

/**
 * @class
 * 
 */
var JCMPUINamespace = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.p1 = null;
    /**
     * @type {function}
     */
    this.p2 = null;
  }
  /**
   * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | string |  |
	 * 
	 * | p2 | function |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  AddEvent(){}
  /**
   * JCMPUINamespace.CallEvent(string p1, Array p2)
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | string |  |
	 * 
	 * | p2 | Array |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  CallEvent(){}
  /**
   * JCMPUINamespace.ShowHud()
	 * 
	 * 
   * 
   * @returns {}
   */
  ShowHud(){}
  /**
   * JCMPUINamespace.HideHud()
	 * 
	 * 
   * 
   * @returns {}
   */
  HideHud(){}
  /**
   * JCMPUINamespace.IsHudVisible()
	 * 
	 * 
   * 
   * @returns {}
   */
  IsHudVisible(){}
}

/**
 * @class
 * Enable the local player to use certain ingame abilities
 */
var LocalPlayer = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {Vector3f}
     */
    this.lookAt = null;
    /**
     * @type {Camera}
     */
    this.camera = null;
    /**
     * @type {boolean}
     */
    this.frozen = null;
    /**
     * @type {boolean}
     */
    this.controlsEnabled = null;
    /**
     * @type {number}
     */
    this.baseState = null;
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {number}
     */
    this.dimension = null;
    /**
     * @type {number}
     */
    this.playerStateBits1 = null;
    /**
     * @type {number}
     */
    this.playerStateBits2 = null;
    /**
     * @type {Wingsuit}
     */
    this.wingsuit = null;
    /**
     * @type {HealthEffect}
     */
    this.healthEffects = null;
  }
  /**
   * Enable the local player to use certain ingame abilities
	 * 
	 * Available abilities
	 * 
	 * | Name | Value |
	 * 
	 * | :-- | :-- |
	 * 
	 * | GRAPPLING\_HOOK | 0xCB836D80 |
	 * 
	 * | PARACHUTE | 0xCEEFA27A |
	 * 
	 * | WINGSUIT | 0xE060F641 |
	 * 
	 * **returns:** _void_
	 * 
	 * 
   * @param {number} ability - the designated ability ID (see above)
	 * @param {boolean} enabled - set to true to enable the ability, false to disable it
   * @returns {void}
   */
  SetAbilityEnabled(ability,enabled){}
  /**
   * Check if a certain ingame ability has been enabled for the local player or not
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * @param {number} ability - 
   * @returns {boolean}
   */
  IsAbilityEnabled(ability){}
  /**
   * returns the render position
	 * 
	 * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {number} dtf - delta timing
   * @returns {Vector3f}
   */
  GetRenderPosition(dtf){}
  /**
   * returns the render transform matrix
	 * 
	 * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {number} dtf - delta timing
   * @returns {Matrix}
   */
  GetRenderTransform(dtf){}
  /**
   * returns the bone transform matrix
	 * 
	 * Available bones
	 * 
	 * | Name | Value |
	 * 
	 * | :-- | :-- |
	 * 
	 * | REFERENCE | 0x8EB2FD7C |
	 * 
	 * | OFFSET | 0x4AAA87DB |
	 * 
	 * | HIPS | 0x68C6A89F |
	 * 
	 * | SPINE | 0xE28C84B |
	 * 
	 * | SPINE\_2 | 0xE4DBE36F |
	 * 
	 * | SPINE\_3 | 0x6FE84908 |
	 * 
	 * | STERNUM | 0x9DCAB8BF |
	 * 
	 * | NECK | 0xA1C96158 |
	 * 
	 * | HEAD | 0xA877D9CC |
	 * 
	 * | JAW | 0x92F8D847 |
	 * 
	 * | MID\_LOWER\_LIP | 0xEA3E047C |
	 * 
	 * | LEFT\_MOUTH\_CORNER | 0xE9F7F4C9 |
	 * 
	 * | RIGHT\_MOUTH\_CORNER | 0xF8C71902 |
	 * 
	 * | NOSE | 0x4495EABA |
	 * 
	 * | MID\_UPPER\_LIP | 0x87AE44CB |
	 * 
	 * | UPPER\_LIDS | 0xC851BC59 |
	 * 
	 * | LOWER\_LIDS | 0x9ED86F9E |
	 * 
	 * | LEFT\_EYEBROW\_MID | 0xD3FBF46E |
	 * 
	 * | RIGHT\_EYEBROW\_MID | 0xE75361A8 |
	 * 
	 * | LEFT\_EYE | 0x96A32E27 |
	 * 
	 * | RIGHT\_EYE | 0x24FA932B |
	 * 
	 * | LEFT\_SHOULDER | 0x8735207D |
	 * 
	 * | LEFT\_ARM | 0x4DF0A2B1 |
	 * 
	 * | LEFT\_FORE\_ARM | 0xDEB7751B |
	 * 
	 * | LEFT\_HAND | 0x57C83F95 |
	 * 
	 * | LEFT\_HAND\_ATTACH | 0x4190BFF7 |
	 * 
	 * | LEFT\_HAND\_THUMB | 0x3C7AC14F |
	 * 
	 * | LEFT\_HAND\_THUMB\_2 | 0xEF65A0C0 |
	 * 
	 * | LEFT\_HAND\_THUMB\_3 | 0x2EF7C25D |
	 * 
	 * | LEFT\_HAND\_INDEX | 0xFC8B8AE8 |
	 * 
	 * | LEFT\_HAND\_INDEX\_2 | 0xB275E0DC |
	 * 
	 * | LEFT\_HAND\_INDEX\_3 | 0xA02A2C09 |
	 * 
	 * | LEFT\_HAND\_MIDDLE | 0x9B641407 |
	 * 
	 * | LEFT\_HAND\_MIDDLE\_2 | 0xBB9B9265 |
	 * 
	 * | LEFT\_HAND\_MIDDLE\_3 | 0x40553E55 |
	 * 
	 * | LEFT\_IN\_HAND\_RING | 0xF64929C5 |
	 * 
	 * | LEFT\_HAND\_RING | 0xDF6E85D2 |
	 * 
	 * | LEFT\_HAND\_RING\_2 | 0xADD7F8D8 |
	 * 
	 * | LEFT\_HAND\_RING\_3 | 0x37EDFBE6 |
	 * 
	 * | LEFT\_IN\_HAND\_PINKY | 0x142B3DFF |
	 * 
	 * | LEFT\_HAND\_PINKY | 0xC104DEE3 |
	 * 
	 * | LEFT\_HAND\_PINKY\_2 | 0x869AB17 |
	 * 
	 * | LEFT\_HAND\_PINKY\_3 | 0xE3BBD91D |
	 * 
	 * | LEFT\_HAND\_ATTACH\_2 | 0x7DC90FBE |
	 * 
	 * | LEFT\_FORE\_ARM\_ROLL | 0x9C12B794 |
	 * 
	 * | RIGHT\_SHOULDER | 0x302EEE80 |
	 * 
	 * | RIGHT\_ARM | 0x19D4B6CF |
	 * 
	 * | RIGHT\_FORE\_ARM | 0xBD2F01EA |
	 * 
	 * | RIGHT\_HAND | 0x69E77FA6 |
	 * 
	 * | RIGHT\_HAND\_ATTACH | 0x65C5D2EB |
	 * 
	 * | RIGHT\_HAND\_THUMB | 0x8F745C4E |
	 * 
	 * | RIGHT\_HAND\_THUMB\_2 | 0xFADC7D09 |
	 * 
	 * | RIGHT\_HAND\_THUMB\_3 | 0xACA0D4E6 |
	 * 
	 * | RIGHT\_HAND\_INDEX | 0xB26EE68B |
	 * 
	 * | RIGHT\_HAND\_INDEX\_2 | 0xE64CD51C |
	 * 
	 * | RIGHT\_HAND\_INDEX\_3 | 0x3D143817 |
	 * 
	 * | RIGHT\_HAND\_MIDDLE | 0x3EF00B1A |
	 * 
	 * | RIGHT\_HAND\_MIDDLE\_2 | 0x4DD19349 |
	 * 
	 * | RIGHT\_HAND\_MIDDLE\_3 | 0x92662F93 |
	 * 
	 * | RIGHT\_IN\_HAND\_RING | 0x422FF300 |
	 * 
	 * | RIGHT\_HAND\_RING | 0xC4351CB |
	 * 
	 * | RIGHT\_HAND\_RING\_2 | 0x7165D1D3 |
	 * 
	 * | RIGHT\_HAND\_RING\_3 | 0x2EE173DF |
	 * 
	 * | RIGHT\_IN\_HAND\_PINKY | 0x153AD952 |
	 * 
	 * | RIGHT\_HAND\_PINKY | 0x477CE2E |
	 * 
	 * | RIGHT\_HAND\_PINKY\_2 | 0x197F6405 |
	 * 
	 * | RIGHT\_HAND\_PINKY\_3 | 0x7A36193E |
	 * 
	 * | RIGHT\_HAND\_ATTACH\_2 | 0x8A9856CD |
	 * 
	 * | RIGHT\_FORE\_ARM\_ROLL | 0xC9FC0323 |
	 * 
	 * | BACK\_ATTACH | 0x204A8793 |
	 * 
	 * | BACK\_ATTACH\_2 | 0xB7D0AD64 |
	 * 
	 * | LEFT\_UP\_LEG | 0x26392BC2 |
	 * 
	 * | LEFT\_LEG | 0x782BF8F9 |
	 * 
	 * | LEFT\_FOOT | 0x661134AC |
	 * 
	 * | LEFT\_TOE\_BASE | 0xB31EE9AA |
	 * 
	 * | LEFT\_LEG\_ROLL | 0x84D5F65C |
	 * 
	 * | LEFT\_HOLSTER\_ATTACH | 0x63ABE53F |
	 * 
	 * | LEFT\_UP\_LEG\_ROLL | 0x7CA59BC0 |
	 * 
	 * | RIGHT\_UP\_LEG | 0x8F232B15 |
	 * 
	 * | RIGHT\_LEG | 0xA89A815D |
	 * 
	 * | RIGHT\_FOOT | 0xFF3E004B |
	 * 
	 * | RIGHT\_TOE\_BASE | 0xDD2D6F75 |
	 * 
	 * | RIGHT\_LEG\_ROLL | 0xCFA333AA |
	 * 
	 * | RIGHT\_HOLSTER\_ATTACH | 0x7BD7F313 |
	 * 
	 * | RIGHT\_UP\_LEG\_ROLL | 0x272175A5 |
	 * 
	 * | LEFT\_HAND\_IK\_TARGET | 0xA73E08C1 |
	 * 
	 * | RIGHT\_HAND\_IK\_TARGET | 0xF7EEABA9 |
	 * 
	 * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  GetBoneTransform(){}
}

/**
 * @class
 * new Matrix()
 */
var Matrix = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vector3f}
     */
    this.position = null;
  }
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  Transpose(){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} scale - 
   * @returns {Matrix}
   */
  Scale(scale){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {number} factor - 
	 * @param {Vector3f} rotation - 
   * @returns {Matrix}
   */
  Rotate(factor,rotation){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} translation - 
   * @returns {Matrix}
   */
  Translate(translation){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} p1 - 
	 * @param {Vector3f} p2 - 
	 * @param {Vector3f} p3 - 
   * @returns {Matrix}
   */
  LookAt(p1,p2,p3){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  mul(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  div(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  sub(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  add(){}
}

/**
 * @class
 * Network Player
 */
var NetworkPlayer = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {number}
     */
    this.health = null;
    /**
     * @type {number}
     */
    this.maxHealth = null;
    /**
     * @type {boolean}
     */
    this.localPlayer = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {number}
     */
    this.playerStateBits1 = null;
    /**
     * @type {number}
     */
    this.playerStateBits2 = null;
  }
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {number} p1 - 
	 * @param {number} p2 - 
   * @returns {Matrix}
   */
  GetBoneTransform(p1,p2){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  GetRenderTransform(){}
}

/**
 * @class
 * 
 */
var NetworkVehicle = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {number}
     */
    this.health = null;
    /**
     * @type {number}
     */
    this.maxHealth = null;
    /**
     * @type {Array}
     */
    this.aabb = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {Vector3f}
     */
    this.angularVelocity = null;
    /**
     * @type {Vector3f}
     */
    this.linearVelocity = null;
    /**
     * @type {Vector3f}
     */
    this.aimPosition = null;
    /**
     * @type {number}
     */
    this.engineRPM = null;
    /**
     * @type {number}
     */
    this.type = null;
    /**
     * @type {number}
     */
    this.modelHash = null;
    /**
     * @type {null}
     */
    this.gear = null;
    /**
     * @type {boolean}
     */
    this.nitroEnabled = null;
    /**
     * @type {boolean}
     */
    this.turboJumpEnabled = null;
    /**
     * @type {number}
     */
    this.speedKph = null;
  }
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  GetRenderTransform(){}
}

/**
 * @class
 * A scripting package that is available or running already
 */
var Package = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {string}
     */
    this.dir = null;
    /**
     * @type {boolean}
     */
    this.valid = null;
    /**
     * @type {string}
     */
    this.config = null;
  }
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Starts the package
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * 
   * @returns {boolean}
   */
  Start(){}
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Stops the package
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  Stop(){}
}

/**
 * @class
 * Destroys the POI
 */
var POI = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.type = null;
    /**
     * @type {number}
     */
    this.progress = null;
    /**
     * @type {number}
     */
    this.progressMax = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {number}
     */
    this.minDistance = null;
    /**
     * @type {number}
     */
    this.maxDistance = null;
    /**
     * @type {string}
     */
    this.text = null;
    /**
     * @type {boolean}
     */
    this.visible = null;
    /**
     * @type {boolean}
     */
    this.flashing = null;
    /**
     * @type {boolean}
     */
    this.clampedToScreen = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * Sets the matrix that describes the coordinate system the renderer is drawing to.
 */
var Renderer = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vector2f}
     */
    this.viewportSize = null;
    /**
     * @type {number}
     */
    this.dtf = null;
  }
  /**
   * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | enabled | boolean | Enables or disables culling. |
	 * 
	 * 
   * 
   * @returns {}
   */
  EnableCulling(){}
  /**
   * Renderer.SetTransform({@link Matrix} matrix)
	 * 
	 * Sets the matrix that describes the coordinate system the renderer is drawing to.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | matrix | {@link Matrix} | The new transformation 4x4 matrix |
	 * 
	 * 
   * 
   * @returns {}
   */
  SetTransform(){}
  /**
   * Renderer.DrawText(string text, {@link Vector3f} position, {@link Vector2f} maxSize, {@link RGBA} color, number fontSize, string fontName)
	 * 
	 * Draws a text to the screen or world.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | text | string | The text you want to draw |
	 * 
	 * | position | {@link Vector3f} | The position vector. Set the z-coordinate to 0.5 if you render to the screen. |
	 * 
	 * | maxSize | {@link Vector2f} | Maximum size |
	 * 
	 * | color | {@link RGBA} | Text color |
	 * 
	 * | fontSize | number | Font size |
	 * 
	 * | fontName | string | Font name (all Windows fonts are valid here) |
	 * 
	 * 
   * 
   * @returns {}
   */
  DrawText(){}
  /**
   * Renderer.MeasureText(string text, number fontSize, string fontName)
	 * 
	 * Returns the physical dimensions of a text.
	 * 
	 * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {string} text - Text
	 * @param {number} fontSize - Font size
	 * @param {string} fontName - Font name
   * @returns {Vector2f}
   */
  MeasureText(text,fontSize,fontName){}
  /**
   * Draws a rectangle (behaves similarly to DrawText).
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | position | \[{@link Vector3f}, {@link Vector2f}\] | Position |
	 * 
	 * | size | {@link Vector2f} | Size |
	 * 
	 * | color | {@link RGBA} | Text color |
	 * 
	 * 
   * 
   * @returns {}
   */
  DrawRect(){}
  /**
   * Renderer.DrawLine(\[{@link Vector3f}, {@link Vector2f}\] start, \[{@link Vector3f}, {@link Vector2f}\] end, {@link RGBA} color)
	 * 
	 * Draws a rectangle (behaves similarly to DrawText).
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | start | \[{@link Vector3f}, {@link Vector2f}\] | Start position |
	 * 
	 * | end | \[{@link Vector3f}, {@link Vector2f}\] | End position |
	 * 
	 * | color | {@link RGBA} | Text color |
	 * 
	 * 
   * 
   * @returns {}
   */
  DrawLine(){}
  /**
   * Renderer.DrawTexture({@link Texture} texture, \[{@link Vector3f}, {@link Vector2f}\] position, {@link Vector2f} size)
	 * 
	 * Draws a texture object.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | texture | {@link Texture} | the {@link Texture} to draw |
	 * 
	 * | position | \[{@link Vector3f}, {@link Vector2f}\] | Position |
	 * 
	 * | size | {@link Vector2f} | Size |
	 * 
	 * 
   * 
   * @returns {}
   */
  DrawTexture(){}
  /**
   * Renderer.WorldToScreen({@link Vector3f} p1)
	 * 
	 * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * 
   * @returns {Vector2f}
   */
  WorldToScreen(){}
}

/**
 * @class
 * new RGB(number r, number g, number b)
 */
var RGB = class {
  /**
   * @constructor
   * 
   * @param {number} r - red channel value (0-255)
	 * @param {number} g - green channel value (0-255)
	 * @param {number} b - blue channel value (0-255)
  */
  constructor(r,g,b){
    /**
     * @type {number}
     */
    this.r = null;
    /**
     * @type {number}
     */
    this.g = null;
    /**
     * @type {number}
     */
    this.b = null;
  }
}

/**
 * @class
 * new RGBA(number r, number g, number b, number a)
 */
var RGBA = class {
  /**
   * @constructor
   * 
   * @param {number} r - red channel value (0-255)
	 * @param {number} g - green channel value (0-255)
	 * @param {number} b - blue channel value (0-255)
	 * @param {number} a - alpha channel value (0-255)
  */
  constructor(r,g,b,a){
    /**
     * @type {number}
     */
    this.r = null;
    /**
     * @type {number}
     */
    this.g = null;
    /**
     * @type {number}
     */
    this.b = null;
    /**
     * @type {number}
     */
    this.a = null;
  }
}

/**
 * @class
 * Just don't use it for now.
 */
var Settings = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.p1 = null;
    /**
     * @type {any}
     */
    this.p2 = null;
  }
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | string |  |
	 * 
	 * | p2 | any |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  Set(){}
  /**
   * Settings.Get(string p1)
	 * 
	 * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * **returns:** _any_
	 * 
	 * 
   * @param {string} p1 - 
   * @returns {any}
   */
  Get(p1){}
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * @param {string} p1 - 
   * @returns {boolean}
   */
  Exists(p1){}
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * @param {string} p1 - 
   * @returns {boolean}
   */
  Delete(p1){}
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * new Texture(string file)
 */
var Texture = class {
  /**
   * @constructor
   * 
   * @param {string} file - path to the texture file
  */
  constructor(file){
    /**
     * @type {RGBA}
     */
    this.baseColor = null;
    /**
     * @type {Vector2f}
     */
    this.size = null;
  }
}

/**
 * @class
 * 
 */
var TimeOfDay = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.hour = null;
    /**
     * @type {number}
     */
    this.minute = null;
    /**
     * @type {number}
     */
    this.second = null;
  }
}

/**
 * @class
 * new Vector2(number x, number y)
 */
var Vector2 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
  */
  constructor(x,y){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector2f(number x, number y)
 */
var Vector2f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
  */
  constructor(x,y){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * 
   * @returns {Vector2f}
   */
  add(){}
}

/**
 * @class
 * new Vector3(number x, number y, number z)
 */
var Vector3 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
  */
  constructor(x,y,z){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector3f(number x, number y, number z)
 */
var Vector3f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
  */
  constructor(x,y,z){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * 
   * @returns {Vector3f}
   */
  add(){}
}

/**
 * @class
 * new Vector4(number x, number y, number z, number w)
 */
var Vector4 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
	 * @param {number} w - W value
  */
  constructor(x,y,z,w){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.w = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector4f(number x, number y, number z, number w)
 */
var Vector4f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
	 * @param {number} w - W value
  */
  constructor(x,y,z,w){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.w = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * 
   * @returns {Vector4f}
   */
  add(){}
}

/**
 * @class
 * new WebUIWindow(string name, string location, Vector2 size)
 */
var WebUIWindow = class {
  /**
   * @constructor
   * 
   * @param {string} name - the internal name of the CEF UI window
	 * @param {string} location - the location of the page which CEF should load
	 * @param {Vector2} size - the size of the CEF UI window
  */
  constructor(name,location,size){
    /**
     * @type {Vector2}
     */
    this.size = null;
    /**
     * @type {string}
     */
    this.location = null;
    /**
     * @type {boolean}
     */
    this.hidden = null;
    /**
     * @type {Vector2}
     */
    this.position = null;
    /**
     * @type {boolean}
     */
    this.autoResize = null;
    /**
     * @type {boolean}
     */
    this.captureMouseInput = null;
    /**
     * @type {Texture}
     */
    this.texture = null;
    /**
     * @type {boolean}
     */
    this.autoRenderTexture = null;
  }
  /**
   * Brings the CEF UI to the front
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * function createMyUI() { var firstUI = new WebUIWindow("myFirstUI", "package://my_client_package/index1.html", new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y)); var secondUI = new WebUIWindow("mySecondUI", "package://my_client_package/index2.html", new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y)); //Brings "myFirstUI" to the front so it is visible //Without this, we would see the second created UI on top and not the first one firstUI.BringToFront(); } createMyUI();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  BringToFront(){}
  /**
   * WebUIWindow.Reload(boolean ignoreCache)
	 * 
	 * Reload a certain CEF UI
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | ignoreCache | boolean | whether the cache should be ignored |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * function createMyUI() { var myUI = new WebUIWindow("myUI", "package://my_client_package/index1.html", new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y)); //Change the location property and force the UI to reload myUI.location = "package://my_client_package/index2.html"; myUI.Reload(true); } createMyUI();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Reload(){}
  /**
   * WebUIWindow.CallEvent(string name, any ...args)
	 * 
	 * Calls an Event on the UI that has been added using ```js
	 * 
	 * jcmp.AddEvent
	 * 
	 * ```
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {undefined}
   */
  CallEvent(name,...args){}
  /**
   * Adds an Event Handler so the UI can call it using ```js
	 * 
	 * jcmp.CallLocalEvent
	 * 
	 * ```
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {function} handler - handler function
   * @returns {undefined}
   */
  AddEvent(name,handler){}
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * Local Player Wingsuit
 */
var Wingsuit = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {boolean}
     */
    this.boostEnabled = null;
    /**
     * @type {number}
     */
    this.boostCooldown = null;
    /**
     * @type {number}
     */
    this.boostDuration = null;
    /**
     * @type {number}
     */
    this.boostPower = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * Class to manipulate the game world.
 */
var World = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.weather = null;
    /**
     * @type {boolean}
     */
    this.weatherVisible = null;
    /**
     * @type {RGBA}
     */
    this.moonColor = null;
    /**
     * @type {Vector2f}
     */
    this.sunPosition = null;
    /**
     * @type {number}
     */
    this.sunHDRScale = null;
    /**
     * @type {RGBA}
     */
    this.sunColor = null;
    /**
     * @type {TimeOfDay}
     */
    this.time = null;
  }
  /**
   * Sets the local world time
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | hour | number | hour (0-24) |
	 * 
	 * | minute | number | minute (0-60) |
	 * 
	 * | p3 | number |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  SetTime(){}
  /**
   * World.ResetSunPosition()
	 * 
	 * 
   * 
   * @returns {}
   */
  ResetSunPosition(){}
}

/**
 * @class
 * Called when a Player enters a Checkpoint
 */
var CheckpointEnter = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Checkpoint}
     */
    this.checkpoint = null;
  }
}

/**
 * @class
 * Called when a Player leaves a Checkpoint
 */
var CheckpointLeave = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Checkpoint}
     */
    this.checkpoint = null;
  }
}

/**
 * @class
 * Called every frame (please ask Alex for more details please, we'll appreciate it a lot)
 */
var GameRender = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Renderer}
     */
    this.scriptingRenderer = null;
  }
}

/**
 * @class
 * This event is called when the map is fully loaded after teleporting.
 */
var GameTeleportCompleted = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
  }
}

/**
 * @class
 * This event is called when a teleport has been requested.
 */
var GameTeleportInitiated = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
  }
}

/**
 * @class
 * This event is called when the game 2D rendering has started. This is the perfect place to render to the screen.
 */
var GameUpdateRender = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Renderer}
     */
    this.scriptingRenderer = null;
  }
}

/**
 * @class
 * 
 */
var PackageLoaded = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Package}
     */
    this.package = null;
  }
}

/**
 * @class
 * This event is called when the game 2D rendering has started. This is the perfect place to render to the screen.
 */
var Render = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Renderer}
     */
    this.scriptingRenderer = null;
  }
}

/**
 * @class
 * 
 */
var ScriptError = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.file = null;
    /**
     * @type {number}
     */
    this.line = null;
    /**
     * @type {null}
     */
    this.error = null;
    /**
     * @type {unknown}
     */
    this.stringtrace = null;
  }
}

/**
 * @class
 * Called when the client approved the requested websites (referenced in package.json)
 */
var WebsitesApproved = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
  }
}

/**
 * @class
 * Global instance of JCMPNamespace.
 */
var ___jcmp = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Array<Package>}
     */
    this.packages = null;
    /**
     * @type {undefined}
     */
    this.events = null;
    /**
     * @type {number}
     */
    this.networkVersion = null;
    /**
     * @type {undefined}
     */
    this.version = null;
    /**
     * @type {undefined}
     */
    this.approvedWebsites = null;
    /**
     * @type {undefined}
     */
    this.ui = null;
    /**
     * @type {undefined}
     */
    this.viewportSize = null;
    /**
     * @type {undefined}
     */
    this.localPlayer = null;
    /**
     * @type {undefined}
     */
    this.players = null;
    /**
     * @type {undefined}
     */
    this.world = null;
    /**
     * @type {undefined}
     */
    this.settings = null;
    /**
     * @type {undefined}
     */
    this.vehicles = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}
/** @type ___jcmp */
var jcmp = new ___jcmp();
/**
 * @class
 * Represents an argument(flag) that has been passed to the server (-name=value)
 */
var Argument = class {
  /**
   * @constructor
   * 
   * @param {string} key - Argument key
	 * @param {string} value - Argument value
  */
  constructor(key,value){
    /**
     * @type {string}
     */
    this.key = null;
    /**
     * @type {string}
     */
    this.value = null;
  }
}

/**
 * @class
 * 
 */
var BikeHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.topSpeedKph = null;
    /**
     * @type {number}
     */
    this.topSpeed = null;
    /**
     * @type {number}
     */
    this.dragCoefficient = null;
    /**
     * @type {number}
     */
    this.pmMass = null;
    /**
     * @type {number}
     */
    this.pmLinearDamping = null;
    /**
     * @type {number}
     */
    this.pmAngularDamping = null;
    /**
     * @type {number}
     */
    this.pmGravityFactor = null;
    /**
     * @type {CarHandlingLandGlobal}
     */
    this.landGlobal = null;
    /**
     * @type {CarHandlingEngine}
     */
    this.engine = null;
    /**
     * @type {CarHandlingEngineTransmission}
     */
    this.engineTransmission = null;
    /**
     * @type {CarHandlingBrakes}
     */
    this.brakes = null;
    /**
     * @type {BikeHandlingSteering}
     */
    this.steering = null;
  }
}

/**
 * @class
 * 
 */
var BikeHandlingSteering = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {CarHandlingSteering}
     */
    this.landSteering = null;
    /**
     * @type {BikeHandlingSteeringWheelie}
     */
    this.wheelie = null;
  }
}

/**
 * @class
 * 
 */
var BikeHandlingSteeringWheelie = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.maxLeanAngleDeg = null;
    /**
     * @type {number}
     */
    this.inputReactiveness = null;
    /**
     * @type {number}
     */
    this.deadZone = null;
    /**
     * @type {number}
     */
    this.minSpeed = null;
    /**
     * @type {number}
     */
    this.wheelieAngleDeg = null;
    /**
     * @type {number}
     */
    this.wheelieTorque = null;
    /**
     * @type {number}
     */
    this.nosieAngleDeg = null;
    /**
     * @type {number}
     */
    this.nosieTorque = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {BoatHandlingPropellers}
     */
    this.propellers = null;
    /**
     * @type {BoatHandlingFins}
     */
    this.fins = null;
    /**
     * @type {BoatHandlingSteering}
     */
    this.steering = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandlingFins = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.referenceSpeedMs = null;
    /**
     * @type {number}
     */
    this.pressureDrag = null;
    /**
     * @type {number}
     */
    this.pressureDrag2 = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandlingPropellers = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.maxThrust = null;
    /**
     * @type {number}
     */
    this.maxRpm = null;
    /**
     * @type {number}
     */
    this.maxReverseRpm = null;
    /**
     * @type {number}
     */
    this.diameter = null;
    /**
     * @type {number}
     */
    this.pitch = null;
    /**
     * @type {BoatHandlingPropellersDockingControls}
     */
    this.dockingControls = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandlingPropellersDockingControls = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.maxThrust = null;
    /**
     * @type {number}
     */
    this.maxDockingSpeedMs = null;
    /**
     * @type {number}
     */
    this.maxDockingControlThrottle = null;
    /**
     * @type {number}
     */
    this.dockingYawThrottleLimit = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandlingSteering = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.accelerationSmoothing = null;
    /**
     * @type {BoatHandlingSteeringSteeringFilter}
     */
    this.steeringfilter = null;
  }
}

/**
 * @class
 * 
 */
var BoatHandlingSteeringSteeringFilter = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.tToFullInputMinSpeedS = null;
    /**
     * @type {number}
     */
    this.tToFullInputMaxSpeedS = null;
    /**
     * @type {number}
     */
    this.inputStartSpeedKmph = null;
    /**
     * @type {number}
     */
    this.inputMaxSpeedKmph = null;
    /**
     * @type {number}
     */
    this.counterinputSpeedFactor = null;
    /**
     * @type {number}
     */
    this.zeroinputSpeedFactor = null;
    /**
     * @type {number}
     */
    this.inputSpeedcurveFalloff = null;
  }
}

/**
 * @class
 * 
 */
var CarHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.topSpeedKph = null;
    /**
     * @type {number}
     */
    this.topSpeed = null;
    /**
     * @type {number}
     */
    this.dragCoefficient = null;
    /**
     * @type {number}
     */
    this.pmMass = null;
    /**
     * @type {number}
     */
    this.pmLinearDamping = null;
    /**
     * @type {number}
     */
    this.pmAngularDamping = null;
    /**
     * @type {number}
     */
    this.pmGravityFactor = null;
    /**
     * @type {CarHandlingLandGlobal}
     */
    this.landGlobal = null;
    /**
     * @type {CarHandlingEngine}
     */
    this.engine = null;
    /**
     * @type {CarHandlingEngineTransmission}
     */
    this.engineTransmission = null;
    /**
     * @type {CarHandlingBrakes}
     */
    this.brakes = null;
    /**
     * @type {CarHandlingSteering}
     */
    this.steering = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingBrakes = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {CarHandlingBrakesBrakeAxis}
     */
    this.front = null;
    /**
     * @type {CarHandlingBrakesBrakeAxis}
     */
    this.rear = null;
    /**
     * @type {number}
     */
    this.handbrakeFrictionFactor = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingBrakesBrakeAxis = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.handbrake = null;
    /**
     * @type {number}
     */
    this.maxBrakeTorque = null;
    /**
     * @type {number}
     */
    this.minTimeToBlock = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingEngine = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.topSpeedJumpMultiplier = null;
    /**
     * @type {number}
     */
    this.resistanceAtMinRpm = null;
    /**
     * @type {number}
     */
    this.resistanceAtMaxRpm = null;
    /**
     * @type {number}
     */
    this.resistanceAtOptimalRpm = null;
    /**
     * @type {number}
     */
    this.revLimiterRpmDrop = null;
    /**
     * @type {number}
     */
    this.maxRpm = null;
    /**
     * @type {number}
     */
    this.minRpm = null;
    /**
     * @type {number}
     */
    this.optimalRpm = null;
    /**
     * @type {number}
     */
    this.torqueFactorAtMaxRpm = null;
    /**
     * @type {number}
     */
    this.torqueFactorAtMinRpm = null;
    /**
     * @type {number}
     */
    this.torqueFactorAtOptimalRpm = null;
    /**
     * @type {number}
     */
    this.clutchSlipRpm = null;
    /**
     * @type {number}
     */
    this.engineMinNoise = null;
    /**
     * @type {number}
     */
    this.engineDamageNoiseScale = null;
    /**
     * @type {number}
     */
    this.engineMaxDamageTorque = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingEngineTransmission = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.gears = null;
    /**
     * @type {number}
     */
    this.nitrousGears = null;
    /**
     * @type {number}
     */
    this.sequential = null;
    /**
     * @type {number}
     */
    this.manualClutch = null;
    /**
     * @type {number}
     */
    this.manualClutchBlendRpm = null;
    /**
     * @type {number}
     */
    this.manualClutchBlendTime = null;
    /**
     * @type {number}
     */
    this.forwardRatioPercentage = null;
    /**
     * @type {number}
     */
    this.lowGearForwardRatioPct = null;
    /**
     * @type {number}
     */
    this.topSpeed = null;
    /**
     * @type {number}
     */
    this.lowGearsFinalDrive = null;
    /**
     * @type {number}
     */
    this.finalDrive = null;
    /**
     * @type {number}
     */
    this.reverseUsesForwardGears = null;
    /**
     * @type {number}
     */
    this.reverseGearRatio = null;
    /**
     * @type {number}
     */
    this.clutchDelay = null;
    /**
     * @type {number}
     */
    this.decayTimeToCruiseRpm = null;
    /**
     * @type {number}
     */
    this.targetCruiseRpm = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobal = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.linearDampingX = null;
    /**
     * @type {number}
     */
    this.linearDampingY = null;
    /**
     * @type {number}
     */
    this.linearDampingZ = null;
    /**
     * @type {number}
     */
    this.gravityMultiplierGrounded = null;
    /**
     * @type {number}
     */
    this.gravityMultiplierInAirUp = null;
    /**
     * @type {number}
     */
    this.gravityMultiplierInAirDown = null;
    /**
     * @type {number}
     */
    this.takeoffPitchDamping = null;
    /**
     * @type {CarHandlingLandGlobalWheelDamage}
     */
    this.frontWheelsDamage = null;
    /**
     * @type {CarHandlingLandGlobalWheelDamage}
     */
    this.rearWheelsDamage = null;
    /**
     * @type {CarHandlingLandGlobalDrift}
     */
    this.drift = null;
    /**
     * @type {CarHandlingLandGlobalArcade}
     */
    this.arcade = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobalArcade = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {CarHandlingLandGlobalArcadePerformanceBoost}
     */
    this.heatBoost = null;
    /**
     * @type {CarHandlingLandGlobalArcadePerformanceBoost}
     */
    this.nitroBoost = null;
    /**
     * @type {CarHandlingLandGlobalArcadePerformanceBoost}
     */
    this.nitroBoostUpgraded = null;
    /**
     * @type {CarHandlingLandGlobalArcadeTurboJump}
     */
    this.turboJump = null;
    /**
     * @type {CarHandlingLandGlobalArcadeTurboJump}
     */
    this.turboJumpUpgraded = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobalArcadePerformanceBoost = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.torqueMultiplier = null;
    /**
     * @type {number}
     */
    this.gripMultiplier = null;
    /**
     * @type {number}
     */
    this.pushForce = null;
    /**
     * @type {number}
     */
    this.boostBlendTime = null;
    /**
     * @type {number}
     */
    this.extraTopSpeed = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobalArcadeTurboJump = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.fMultiplier = null;
    /**
     * @type {number}
     */
    this.rMultiplier = null;
    /**
     * @type {number}
     */
    this.punchDelayTime = null;
    /**
     * @type {number}
     */
    this.punchSpeedKph = null;
    /**
     * @type {number}
     */
    this.topSpeedKph = null;
    /**
     * @type {number}
     */
    this.topSpeedJumpMultiplier = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobalDrift = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.driftEntrySlipAngle = null;
    /**
     * @type {number}
     */
    this.driftExitSlipAngle = null;
    /**
     * @type {number}
     */
    this.maxDriftAngleDeg = null;
    /**
     * @type {number}
     */
    this.driftLimitSpreadAngleDeg = null;
    /**
     * @type {number}
     */
    this.constantDriftTorque = null;
    /**
     * @type {number}
     */
    this.maxDriftTorque = null;
    /**
     * @type {number}
     */
    this.counterSteerTorque = null;
    /**
     * @type {number}
     */
    this.counterSteerTorqueHandbrake = null;
    /**
     * @type {number}
     */
    this.counterSteerTorqueBrake = null;
    /**
     * @type {number}
     */
    this.driftYawVelDamp = null;
    /**
     * @type {number}
     */
    this.overdriftYawVelDamp = null;
    /**
     * @type {number}
     */
    this.exitDriftYawVelDamp = null;
    /**
     * @type {number}
     */
    this.velocityRotationStartAngle = null;
    /**
     * @type {number}
     */
    this.velocityRotationEndAngle = null;
    /**
     * @type {number}
     */
    this.velocityRotationAmount = null;
    /**
     * @type {number}
     */
    this.velocityRotationAngleExp = null;
    /**
     * @type {number}
     */
    this.counterSteerRotFactor = null;
    /**
     * @type {number}
     */
    this.steeringSensitivity = null;
    /**
     * @type {number}
     */
    this.minSpeedToDriftKmph = null;
    /**
     * @type {number}
     */
    this.keepVelocityStrength = null;
    /**
     * @type {number}
     */
    this.maxKeepVelocityAccelerationG = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingLandGlobalWheelDamage = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.skewHealth = null;
    /**
     * @type {number}
     */
    this.brokenWheelFrictionFraction = null;
    /**
     * @type {number}
     */
    this.brokenWheelRadiusFraction = null;
  }
}

/**
 * @class
 * 
 */
var CarHandlingSteering = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.deadZone = null;
    /**
     * @type {number}
     */
    this.saturationZone = null;
    /**
     * @type {number}
     */
    this.tToFullSteerS = null;
    /**
     * @type {number}
     */
    this.maxSpeedTToFullSteerS = null;
    /**
     * @type {number}
     */
    this.minSpeedKmph = null;
    /**
     * @type {number}
     */
    this.maxSpeedKmph = null;
    /**
     * @type {number}
     */
    this.steerAngleMinSpeedDeg = null;
    /**
     * @type {number}
     */
    this.steerAngleMaxSpeedDeg = null;
    /**
     * @type {number}
     */
    this.steerCurveFalloff = null;
    /**
     * @type {number}
     */
    this.countersteerSpeedFactor = null;
    /**
     * @type {number}
     */
    this.steerInSpeedFactor = null;
    /**
     * @type {number}
     */
    this.steerInputPowerPc = null;
    /**
     * @type {number}
     */
    this.steerInputPowerDurango = null;
    /**
     * @type {number}
     */
    this.steerInputPowerOrbis = null;
    /**
     * @type {number}
     */
    this.wheelDriftAligningStrength = null;
  }
}

/**
 * @class
 * 
 */
var EventInstance = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {boolean}
     */
    this.oneShot = null;
  }
}

/**
 * @class
 * The EventSystem is used to communicate between server packages and to clients.
 */
var EventSystem = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {function}
     */
    this.handler = null;
  }
  /**
   * Adds an event handler
	 * 
	 * **returns:** _{@link EventInstance}_
	 * 
	 * 
   * @param {string} name - the event name
	 * @param {function} handler - the function to execute when the event is called
   * @returns {EventInstance}
   */
  Add(name,handler){}
  /**
   * Calls an Event.
	 * 
	 * 
	 * 
	 * This function always returns an array with all return values from all event handlers for that name.
	 * 
	 * **returns:** _Array_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {Array}
   */
  Call(name,...args){}
  /**
   * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | {@link EventInstance} |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  Remove(){}
  /**
   * jcmp.events.RemoveAll(string p1)
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | p1 | string |  |
	 * 
	 * 
   * 
   * @returns {}
   */
  RemoveAll(){}
  /**
   * jcmp.events.AddRemoteCallable(string name, function handler)
	 * 
	 * Adds an event that can be called from client scripts.
	 * 
	 * 
	 * 
	 * The first argument in the handler is the {@link Player} from where the event is being called.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | name | string | the event name |
	 * 
	 * | handler | function | the function to execute when the event is called |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.AddRemoteCallable('MyEvent', player => { console.log(`${player.name} called MyEvent!`); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  AddRemoteCallable(){}
  /**
   * jcmp.events.CallRemote(string name, {@link Player} or ```js
	 * 
	 * null
	 * 
	 * ``` target, any ...args)
	 * 
	 * Calls an Event on the client side to one or all {@link Player}s. Other than the normal ```js
	 * 
	 * Call
	 * 
	 * ``` function, this function does not return anything.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | name | string | event name |
	 * 
	 * | target | {@link Player} or ```js
	 * 
	 * null
	 * 
	 * ``` | target to call the event on. If using \`null\`, the event will be broadcasted to all clients. |
	 * 
	 * | ...args | any | optional event arguments |
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  CallRemote(){}
}

/**
 * @class
 * Game Objects (Props)
 */
var GameObject = class {
  /**
   * @constructor
   * 
   * @param {string} model - the model name (not hash!) of the object
	 * @param {Vector3f} position - the desired position of the GameObject
	 * @param {Vector3f} rotation - the desired rotation of the GameObject
  */
  constructor(model,position,rotation){
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {string}
     */
    this.modelHash = null;
    /**
     * @type {number}
     */
    this.dimension = null;
  }
  /**
   * Applies a 3d-force to the GameObject
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | direction | {@link Vector3f} | force direction |
	 * 
	 * | deltaTime | number | delta time |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * var object = new GameObject('glowstick_yellow'); object.ApplyForce(new Vector3f(100, 0, 0), 1);
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  ApplyForce(){}
  /**
   * GameObject.Destroy()
	 * 
	 * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * 
 */
var HelicopterHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {HelicopterHandlingModel}
     */
    this.model = null;
    /**
     * @type {HelicopterHandlingSteering}
     */
    this.steering = null;
  }
}

/**
 * @class
 * 
 */
var HelicopterHandlingModel = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.centerOfTorquesX = null;
    /**
     * @type {number}
     */
    this.centerOfTorquesY = null;
    /**
     * @type {number}
     */
    this.centerOfTorquesZ = null;
    /**
     * @type {number}
     */
    this.altitudeInputPower = null;
    /**
     * @type {number}
     */
    this.yawInputPower = null;
    /**
     * @type {number}
     */
    this.pitchInputPower = null;
    /**
     * @type {number}
     */
    this.rollInputPower = null;
    /**
     * @type {number}
     */
    this.pitchInputDeadZone = null;
    /**
     * @type {number}
     */
    this.tToFullYawS = null;
    /**
     * @type {number}
     */
    this.maxSpeedTToFullYawS = null;
    /**
     * @type {number}
     */
    this.bankStartVelocityKmph = null;
    /**
     * @type {number}
     */
    this.bankMaxVelocityKmph = null;
    /**
     * @type {number}
     */
    this.minSpeedDiveKmph = null;
    /**
     * @type {number}
     */
    this.maxSpeedDiveKmph = null;
    /**
     * @type {number}
     */
    this.addDivePitchDeg = null;
    /**
     * @type {number}
     */
    this.addClimbPitchDeg = null;
    /**
     * @type {number}
     */
    this.maxRollInputForClimb = null;
    /**
     * @type {number}
     */
    this.climbSpeedLowSpeedKmph = null;
    /**
     * @type {number}
     */
    this.diveSpeedLowSpeedKmph = null;
    /**
     * @type {number}
     */
    this.minAltitudeInput = null;
    /**
     * @type {number}
     */
    this.unsettledAltitudeGainClimb = null;
    /**
     * @type {number}
     */
    this.unsettledAltitudeGainDive = null;
    /**
     * @type {number}
     */
    this.maxDivingGs = null;
    /**
     * @type {number}
     */
    this.maxClimbingGs = null;
    /**
     * @type {number}
     */
    this.addForceForwardPower = null;
    /**
     * @type {number}
     */
    this.addForceLateralPower = null;
    /**
     * @type {number}
     */
    this.trimInputGain = null;
    /**
     * @type {number}
     */
    this.forwardDrag = null;
    /**
     * @type {number}
     */
    this.lateralDrag = null;
    /**
     * @type {number}
     */
    this.verticalDrag = null;
    /**
     * @type {number}
     */
    this.tailLateralDrag = null;
    /**
     * @type {number}
     */
    this.tailVerticalDrag = null;
    /**
     * @type {number}
     */
    this.angularDrag = null;
    /**
     * @type {number}
     */
    this.lowSpeedMaxDragYawSpeed = null;
    /**
     * @type {number}
     */
    this.highSpeedMaxDragYawSpeed = null;
    /**
     * @type {number}
     */
    this.yawDragNoInput = null;
    /**
     * @type {number}
     */
    this.forwardDragNoInput = null;
    /**
     * @type {number}
     */
    this.lateralDragNoInput = null;
    /**
     * @type {number}
     */
    this.verticalDragNoInput = null;
    /**
     * @type {number}
     */
    this.tailDistanceToComM = null;
    /**
     * @type {number}
     */
    this.addForwardForce = null;
    /**
     * @type {number}
     */
    this.addRightForce = null;
    /**
     * @type {number}
     */
    this.addLateralFactorPullUp = null;
    /**
     * @type {number}
     */
    this.maxRollDeg = null;
    /**
     * @type {number}
     */
    this.addBankRollDeg = null;
    /**
     * @type {number}
     */
    this.addBankRollPullUpDeg = null;
    /**
     * @type {number}
     */
    this.maxPitchLowSpeedDeg = null;
    /**
     * @type {number}
     */
    this.maxPitchHighSpeedDeg = null;
    /**
     * @type {number}
     */
    this.counterPitchAngleDeg = null;
    /**
     * @type {number}
     */
    this.counterPitchSpeedKmph = null;
    /**
     * @type {number}
     */
    this.rollP = null;
    /**
     * @type {number}
     */
    this.rollI = null;
    /**
     * @type {number}
     */
    this.rollD = null;
    /**
     * @type {number}
     */
    this.rollMaxAmplitude = null;
    /**
     * @type {number}
     */
    this.pitchP = null;
    /**
     * @type {number}
     */
    this.pitchI = null;
    /**
     * @type {number}
     */
    this.pitchD = null;
    /**
     * @type {number}
     */
    this.pitchMaxAmplitude = null;
    /**
     * @type {number}
     */
    this.yawP = null;
    /**
     * @type {number}
     */
    this.yawI = null;
    /**
     * @type {number}
     */
    this.yawD = null;
    /**
     * @type {number}
     */
    this.yawMaxAmplitude = null;
    /**
     * @type {number}
     */
    this.lowSpeedAltitudeP = null;
    /**
     * @type {number}
     */
    this.lowSpeedAltitudeI = null;
    /**
     * @type {number}
     */
    this.lowSpeedAltitudeD = null;
    /**
     * @type {number}
     */
    this.highSpeedAltitudeP = null;
    /**
     * @type {number}
     */
    this.highSpeedAltitudeI = null;
    /**
     * @type {number}
     */
    this.highSpeedAltitudeD = null;
    /**
     * @type {number}
     */
    this.altitudeLimitThresholdLow = null;
    /**
     * @type {number}
     */
    this.altitudeLimitThresholdHigh = null;
  }
}

/**
 * @class
 * 
 */
var HelicopterHandlingSteering = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.returnPitchLimit = null;
    /**
     * @type {number}
     */
    this.returnRollLimit = null;
    /**
     * @type {PlaneHandlingAirSteering}
     */
    this.airSteering = null;
  }
}

/**
 * @class
 * 
 */
var InputAxisTiming = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.timeToMaxInputAtMinSpeedS = null;
    /**
     * @type {number}
     */
    this.timeToMaxInputAtMaxSpeedS = null;
    /**
     * @type {number}
     */
    this.centeringInputTimeFactor = null;
    /**
     * @type {number}
     */
    this.counterInputTimeFactor = null;
  }
}

/**
 * @class
 * Global JCMP class. Use jcmp in your script.
 */
var JCMPNamespace = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Array<Package>}
     */
    this.packages = null;
    /**
     * @type {EventSystem}
     */
    this.events = null;
    /**
     * @type {Server}
     */
    this.server = null;
    /**
     * @type {number}
     */
    this.networkVersion = null;
    /**
     * @type {string}
     */
    this.version = null;
    /**
     * @type {Array<Player>}
     */
    this.players = null;
    /**
     * @type {Array<Vehicle>}
     */
    this.vehicles = null;
  }
}

/**
 * @class
 * new Matrix()
 */
var Matrix = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vector3f}
     */
    this.position = null;
  }
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  Transpose(){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} scale - 
   * @returns {Matrix}
   */
  Scale(scale){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {number} factor - 
	 * @param {Vector3f} rotation - 
   * @returns {Matrix}
   */
  Rotate(factor,rotation){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} translation - 
   * @returns {Matrix}
   */
  Translate(translation){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Vector3f} p1 - 
	 * @param {Vector3f} p2 - 
	 * @param {Vector3f} p3 - 
   * @returns {Matrix}
   */
  LookAt(p1,p2,p3){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  mul(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  div(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * @param {Matrix} p1 - 
   * @returns {Matrix}
   */
  sub(p1){}
  /**
   * **returns:** _{@link Matrix}_
	 * 
	 * 
   * 
   * @returns {Matrix}
   */
  add(){}
}

/**
 * @class
 * A scripting package that is available or running already
 */
var Package = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {string}
     */
    this.dir = null;
    /**
     * @type {boolean}
     */
    this.valid = null;
    /**
     * @type {string}
     */
    this.config = null;
  }
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Starts the package
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * 
   * @returns {boolean}
   */
  Start(){}
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Stops the package
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  Stop(){}
}

/**
 * @class
 * 
 */
var PlaneHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {PlaneHandlingAirSteering}
     */
    this.airSteering = null;
    /**
     * @type {PlaneHandlingEngine}
     */
    this.engine = null;
  }
}

/**
 * @class
 * 
 */
var PlaneHandlingAirSteering = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.maxSteeringAngle = null;
    /**
     * @type {number}
     */
    this.accelerationSmoothing = null;
    /**
     * @type {number}
     */
    this.rollReturn = null;
    /**
     * @type {number}
     */
    this.pitchReturn = null;
    /**
     * @type {number}
     */
    this.referenceMinSpeedKPH = null;
    /**
     * @type {number}
     */
    this.referenceMaxSpeedKPH = null;
    /**
     * @type {InputAxisTiming}
     */
    this.rollAxisTiming = null;
    /**
     * @type {InputAxisTiming}
     */
    this.pitchAxisTiming = null;
    /**
     * @type {InputAxisTiming}
     */
    this.yawAxisTiming = null;
  }
}

/**
 * @class
 * 
 */
var PlaneHandlingEngine = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.minThrust = null;
    /**
     * @type {number}
     */
    this.maxThrust = null;
    /**
     * @type {number}
     */
    this.runThrust = null;
    /**
     * @type {number}
     */
    this.maxThrustAcceleration = null;
    /**
     * @type {number}
     */
    this.taxiingMaxThrust = null;
    /**
     * @type {number}
     */
    this.taxiingInputThreshold = null;
    /**
     * @type {number}
     */
    this.taxiingTopSpeed = null;
  }
}

/**
 * @class
 * Immediately kicks the Player from the Server.
 */
var Player = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Vehicle or undefined}
     */
    this.vehicle = null;
    /**
     * @type {RemoteClient}
     */
    this.client = null;
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {number}
     */
    this.health = null;
    /**
     * @type {boolean}
     */
    this.invulnerable = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.respawnPosition = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {Vector3f}
     */
    this.aimPosition = null;
    /**
     * @type {PlayerWeapn}
     */
    this.selectedWeapon = null;
    /**
     * @type {Array<PlayerWeapon> or undefined}
     */
    this.weapons = null;
    /**
     * @type {number}
     */
    this.dimension = null;
  }
  /**
   * Immediately kicks the Player from the Server.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | reason | string | reason for kicking the Player. currently unused (cannot be seen by the Player) |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('PlayerReady', player => { player.Kick('meow!'); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Kick(){}
  /**
   * Player.Respawn()
	 * 
	 * Respawns the Player. The position is stored in ```js
	 * 
	 * Player.respawnPosition
	 * 
	 * ```
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('PlayerDeath', player => { player.respawnPosition = player.position player.Respawn(); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Respawn(){}
  /**
   * Player.GiveWeapon(number weaponHash, number ammo, boolean equipNow)
	 * 
	 * Gives the Player a weapon.
	 * 
	 * **returns:** _PlayerWeapn_
	 * 
	 * 
   * @param {number} weaponHash - the weapon's hash
	 * @param {number} ammo - desired ammunition. If the Player already has the weapon, it will increase the ammo by this number.
	 * @param {boolean} equipNow - whether the weapon should be equipped automatically.
   * @returns {PlayerWeapn}
   */
  GiveWeapon(weaponHash,ammo,equipNow){}
  /**
   * **returns:** _boolean_
	 * 
	 * 
   * 
   * @returns {boolean}
   */
  RemoveWeapon(){}
}

/**
 * @class
 * A Weapon that is currently in a Players inventory
 */
var PlayerWeapon = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {number}
     */
    this.modelHash = null;
    /**
     * @type {number}
     */
    this.slotIndex = null;
    /**
     * @type {number}
     */
    this.magazineAmmo = null;
    /**
     * @type {number}
     */
    this.reserveAmmo = null;
  }
}

/**
 * @class
 * represents a Client connected to the server.
 */
var RemoteClient = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {string}
     */
    this.ipAddress = null;
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {number}
     */
    this.ping = null;
    /**
     * @type {string}
     */
    this.steamId = null;
    /**
     * @type {boolean}
     */
    this.steamAuthenticated = null;
  }
  /**
   * Immediately kicks the Client from the Server.
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | reason | string | reason for kicking the Client. currently unused (cannot be seen by the user) |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('ClientConnected', client => { client.Kick('meow!'); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Kick(){}
  /**
   * RemoteClient.DoesOwnDLC(number dlc)
	 * 
	 * Checks whether the client owns the DLC
	 * 
	 * Available DLCs
	 * 
	 * | Name | Value |
	 * 
	 * | :-- | :-- |
	 * 
	 * | SKY\_FORTRESS | 400551 |
	 * 
	 * | MECH\_LAND\_ASSAULT | 400490 |
	 * 
	 * | BAVARIUM\_SEA\_HEIST | 442051 |
	 * 
	 * | AIR\_LAND\_SEA | 401850 |
	 * 
	 * | FIRESTARTER\_SKINS | 348880 |
	 * 
	 * | CAPSTONE\_BLOODHOUND\_RPG | 388294 |
	 * 
	 * | KOUSAVA\_RIFLE | 442050 |
	 * 
	 * | FINAL\_ARGUMENT\_SNIPER | 488293 |
	 * 
	 * | COMBAT\_BUGGY | 388290 |
	 * 
	 * | MINIGUN\_RACING\_BOAT | 388291 |
	 * 
	 * | ROCKET\_LAUNCHER\_SPORTS\_CAR | 388292 |
	 * 
	 * | REAPER\_MISSILE\_MECH | 442052 |
	 * 
	 * **returns:** _boolean_
	 * 
	 * 
   * @param {number} dlc - DLC number
   * @returns {boolean}
   */
  DoesOwnDLC(dlc){}
}

/**
 * @class
 * new RGB(number r, number g, number b)
 */
var RGB = class {
  /**
   * @constructor
   * 
   * @param {number} r - red channel value (0-255)
	 * @param {number} g - green channel value (0-255)
	 * @param {number} b - blue channel value (0-255)
  */
  constructor(r,g,b){
    /**
     * @type {number}
     */
    this.r = null;
    /**
     * @type {number}
     */
    this.g = null;
    /**
     * @type {number}
     */
    this.b = null;
  }
}

/**
 * @class
 * new RGBA(number r, number g, number b, number a)
 */
var RGBA = class {
  /**
   * @constructor
   * 
   * @param {number} r - red channel value (0-255)
	 * @param {number} g - green channel value (0-255)
	 * @param {number} b - blue channel value (0-255)
	 * @param {number} a - alpha channel value (0-255)
  */
  constructor(r,g,b,a){
    /**
     * @type {number}
     */
    this.r = null;
    /**
     * @type {number}
     */
    this.g = null;
    /**
     * @type {number}
     */
    this.b = null;
    /**
     * @type {number}
     */
    this.a = null;
  }
}

/**
 * @class
 * Information about the Server
 */
var Server = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Array<Argument>}
     */
    this.args = null;
    /**
     * @type {string}
     */
    this.config = null;
    /**
     * @type {number}
     */
    this.currentTickRate = null;
    /**
     * @type {Array<RemoteClient>}
     */
    this.clients = null;
  }
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Stops the Server
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.server.Stop();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Stop(){}
  /**
   * Server.Restart()
	 * 
	 * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Restarts the Server
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.server.Restart();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Restart(){}
  /**
   * Server.AddInputHandler(function handler)
	 * 
	 * Adds a handler for the server input (console input)
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | handler | function | input handler |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.server.AddInputHandler(text => { console.log(`input: ${text}`); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  AddInputHandler(){}
  /**
   * Server.UpdateClientPackage(string p1)
	 * 
	 * Parameter
	 * 
	 * 
   * 
   * @returns {}
   */
  UpdateClientPackage(){}
}

/**
 * @class
 * new Vector2(number x, number y)
 */
var Vector2 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
  */
  constructor(x,y){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector2f(number x, number y)
 */
var Vector2f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
  */
  constructor(x,y){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * @param {Vector2f} vec - 
   * @returns {Vector2f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector2f}_
	 * 
	 * 
   * 
   * @returns {Vector2f}
   */
  add(){}
}

/**
 * @class
 * new Vector3(number x, number y, number z)
 */
var Vector3 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
  */
  constructor(x,y,z){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector3f(number x, number y, number z)
 */
var Vector3f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
  */
  constructor(x,y,z){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * @param {Vector3f} vec - 
   * @returns {Vector3f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector3f}_
	 * 
	 * 
   * 
   * @returns {Vector3f}
   */
  add(){}
}

/**
 * @class
 * new Vector4(number x, number y, number z, number w)
 */
var Vector4 = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
	 * @param {number} w - W value
  */
  constructor(x,y,z,w){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.w = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
}

/**
 * @class
 * new Vector4f(number x, number y, number z, number w)
 */
var Vector4f = class {
  /**
   * @constructor
   * 
   * @param {number} x - X value
	 * @param {number} y - Y value
	 * @param {number} z - Z value
	 * @param {number} w - W value
  */
  constructor(x,y,z,w){
    /**
     * @type {number}
     */
    this.x = null;
    /**
     * @type {number}
     */
    this.y = null;
    /**
     * @type {number}
     */
    this.z = null;
    /**
     * @type {number}
     */
    this.w = null;
    /**
     * @type {number}
     */
    this.length = null;
  }
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  mul(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  div(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * @param {Vector4f} vec - 
   * @returns {Vector4f}
   */
  sub(vec){}
  /**
   * **returns:** _{@link Vector4f}_
	 * 
	 * 
   * 
   * @returns {Vector4f}
   */
  add(){}
}

/**
 * @class
 * Vehicle
 */
var Vehicle = class {
  /**
   * @constructor
   * 
   * @param {number} modelHash - the model hash (not name!) of the vehicle
	 * @param {Vector3f} position - the desired position of the vehicle
	 * @param {Vector3f} rotation - the desired rotation of the vehicle
  */
  constructor(modelHash,position,rotation){
    /**
     * @type {Player}
     */
    this.driver = null;
    /**
     * @type {Vector3f}
     */
    this.position = null;
    /**
     * @type {Vector3f}
     */
    this.rotation = null;
    /**
     * @type {number}
     */
    this.networkId = null;
    /**
     * @type {boolean}
     */
    this.destroyed = null;
    /**
     * @type {boolean}
     */
    this.nitroEnabled = null;
    /**
     * @type {boolean}
     */
    this.turboJumpEnabled = null;
    /**
     * @type {number}
     */
    this.primaryColor = null;
    /**
     * @type {Vector3f}
     */
    this.linearVelocity = null;
    /**
     * @type {Vector3f}
     */
    this.angularVelocity = null;
    /**
     * @type {Vector3f}
     */
    this.aimPostion = null;
    /**
     * @type {number}
     */
    this.health = null;
    /**
     * @type {number}
     */
    this.modelHash = null;
    /**
     * @type {VehicleHandling}
     */
    this.handling = null;
    /**
     * @type {number}
     */
    this.dimension = null;
  }
  /**
   * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Fully repairs the given vehicle
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('VehicleDestroyed', vehicle => { vehicle.Repair(); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Repair(){}
  /**
   * Vehicle.Respawn()
	 * 
	 * This function is marked as **unstable** and is not recommended for use in production environments. It is not guaranteed to work at all (we're sorry).
	 * 
	 * Respawns the vehicle at its initial spawning position
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('VehicleDestroyed', vehicle => { vehicle.Respawn(); });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  Respawn(){}
  /**
   * Vehicle.GetOccupant(number seat)
	 * 
	 * Get the occupant of a vehicle seat
	 * 
	 * **returns:** _{@link Player} or undefined_
	 * 
	 * 
   * @param {number} seat - the vehicles seat
   * @returns {Player or undefined}
   */
  GetOccupant(seat){}
  /**
   * Set the occupant of the given vehicle.
	 * 
	 * _Note: if the player is not in the vicinity of the vehicle, he will first be teleported there automatically (slightly above the vehicle in the air)._
	 * 
	 * Parameter
	 * 
	 * | Name | Type | Description |
	 * 
	 * | :-- | :-- | :-- |
	 * 
	 * | seat | number | the vehicles seat |
	 * 
	 * | player | {@link Player} | the player entity |
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.events.Add('PlayerReady', player => { var vehicle = new Vehicle(28454791, player.position, player.rotation); //Spawn the vehicle at the players position vehicle.SetOccupant(0, player); //Assign the player to the driver seat });
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  SetOccupant(){}
  /**
   * Vehicle.Destroy()
	 * 
	 * 
   * 
   * @returns {}
   */
  Destroy(){}
}

/**
 * @class
 * 
 */
var VehicleHandling = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {CarHandling}
     */
    this.car = null;
    /**
     * @type {BoatHandling}
     */
    this.boat = null;
    /**
     * @type {HelicopterHandling}
     */
    this.helicopter = null;
    /**
     * @type {PlaneHandling}
     */
    this.plane = null;
    /**
     * @type {BikeHandling}
     */
    this.bike = null;
  }
}

/**
 * @class
 * Called when a RemoteClient connected to the Server
 */
var ClientConnected = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {RemoteClient}
     */
    this.client = null;
  }
}

/**
 * @class
 * Called when a RemoteClient tries to connect to the Server
 */
var ClientConnectRequest = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.playerName = null;
    /**
     * @type {string}
     */
    this.ipAddress = null;
  }
}

/**
 * @class
 * Called when a RemoteClient disconnected from the Server
 */
var ClientDisconnected = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {RemoteClient}
     */
    this.client = null;
    /**
     * @type {number}
     */
    this.reason = null;
  }
}

/**
 * @class
 * 
 */
var PackageLoaded = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Package}
     */
    this.package = null;
  }
}

/**
 * @class
 * 
 */
var PlayerCreated = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.player = null;
  }
}

/**
 * @class
 * 
 */
var PlayerDeath = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.player_scripting_component = null;
    /**
     * @type {unknown}
     */
    this.killer_scripting_component = null;
    /**
     * @type {number}
     */
    this.reason = null;
  }
}

/**
 * @class
 * 
 */
var PlayerDestroyed = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.player = null;
  }
}

/**
 * @class
 * 
 */
var PlayerHijackVehicle = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.occupant = null;
    /**
     * @type {Vehicle}
     */
    this.entity = null;
    /**
     * @type {Player}
     */
    this.current_player_scripting = null;
  }
}

/**
 * @class
 * 
 */
var PlayerReady = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.player = null;
  }
}

/**
 * @class
 * 
 */
var PlayerRespawn = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Player}
     */
    this.player_scripting_component = null;
  }
}

/**
 * @class
 * called when a Player enters a Vehicle.
 */
var PlayerVehicleEntered = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {unknown}
     */
    this.player = null;
    /**
     * @type {Vehicle}
     */
    this.vehicle = null;
    /**
     * @type {number}
     */
    this.seatIndex = null;
  }
}

/**
 * @class
 * 
 */
var PlayerVehicleExited = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {unknown}
     */
    this.this = null;
    /**
     * @type {Vehicle}
     */
    this.old_vehicle = null;
    /**
     * @type {Player}
     */
    this.player_component = null;
  }
}

/**
 * @class
 * 
 */
var PlayerVehicleSeatChange = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {unknown}
     */
    this.this = null;
    /**
     * @type {Vehicle}
     */
    this.vehicle = null;
    /**
     * @type {number}
     */
    this.seatIndex = null;
    /**
     * @type {Player}
     */
    this.player_component = null;
  }
}

/**
 * @class
 * 
 */
var ScriptError = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.file = null;
    /**
     * @type {number}
     */
    this.line = null;
    /**
     * @type {null}
     */
    this.error = null;
    /**
     * @type {unknown}
     */
    this.stringtrace = null;
  }
}

/**
 * @class
 * 
 */
var VehicleCreated = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vehicle}
     */
    this.vehicle = null;
  }
}

/**
 * @class
 * 
 */
var VehicleDestroyed = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vehicle}
     */
    this.vehicle = null;
  }
}

/**
 * @class
 * called when a Vehicle is exploded.
 */
var VehicleExploded = class {
  /**
   * @constructor
   * 
   * 
  */
  constructor(){
    /**
     * @type {Vehicle}
     */
    this.entity_manager = null;
  }
}

/**
 * @class
 * The global instance of the JCMPNamespace.
 */
var ___jcmp = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {Array<Package>}
     */
    this.packages = null;
    /**
     * @type {undefined}
     */
    this.events = null;
    /**
     * @type {Server}
     */
    this.server = null;
    /**
     * @type {number}
     */
    this.networkVersion = null;
    /**
     * @type {undefined}
     */
    this.version = null;
    /**
     * @type {Array<Player>}
     */
    this.players = null;
    /**
     * @type {Array<Vehicle>}
     */
    this.vehicles = null;
  }
  /**
   * 
   * 
   * @returns {}
   */
  Destroy(){}
}
/** @type ___jcmp */
var jcmp = new ___jcmp();
/**
 * @class
 * JCMP Namespace class for CEF. The global instance is jcmp.
 */
var JCMPNamespace = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {function}
     */
    this.handler = null;
  }
  /**
   * Listens on a event called from client packages or other UIs
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {function} handler - event handler
   * @returns {undefined}
   */
  AddEvent(name,handler){}
  /**
   * Calls another UI event or client package event
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {undefined}
   */
  CallEvent(name,...args){}
  /**
   * Calls the given event on a client package that registered an event using WebUIWindow#AddEvent
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {undefined}
   */
  CallLocalEvent(name,...args){}
  /**
   * Shows the Cursor (refcounted)
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.ShowCursor();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  ShowCursor(){}
  /**
   * jcmp.HideCursor()
	 * 
	 * hides the Cursor (refcounted)
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  HideCursor(){}
}

/**
 * @class
 * The global instance of the JCMPNamespace.
 */
var ___jcmp = class {
  /**
   * @constructor
   * @hideconstructor
   * 
  */
  constructor(){
    /**
     * @type {string}
     */
    this.name = null;
    /**
     * @type {function}
     */
    this.handler = null;
  }
  /**
   * Listens on a event called from client packages or other UIs
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {function} handler - event handler
   * @returns {undefined}
   */
  AddEvent(name,handler){}
  /**
   * Calls another UI event or client package event
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {undefined}
   */
  CallEvent(name,...args){}
  /**
   * Calls the given event on a client package that registered an event using WebUIWindow#AddEvent
	 * 
	 * **returns:** _undefined_
	 * 
	 * 
   * @param {string} name - event name
	 * @param {any} ...args - optional event arguments
   * @returns {undefined}
   */
  CallLocalEvent(name,...args){}
  /**
   * Shows the Cursor (refcounted)
	 * 
	 * Example
	 * 
	 * ```js
	 * 
	 * jcmp.ShowCursor();
	 * 
	 * ```
	 * 
	 * 
   * 
   * @returns {}
   */
  ShowCursor(){}
  /**
   * jcmp.HideCursor()
	 * 
	 * hides the Cursor (refcounted)
	 * 
	 * Example
	 * 
	 * 
   * 
   * @returns {}
   */
  HideCursor(){}
}
/** @type ___jcmp */
var jcmp = new ___jcmp();
Object.assign(global, {Camera, Checkpoint, EventInstance, EventSystem, HealthEffect, JCMPNamespace, JCMPUINamespace, LocalPlayer, Matrix, NetworkPlayer, NetworkVehicle, Package, POI, Renderer, RGB, RGBA, Settings, Texture, TimeOfDay, Vector2, Vector2f, Vector3, Vector3f, Vector4, Vector4f, WebUIWindow, Wingsuit, World, CheckpointEnter, CheckpointLeave, GameRender, GameTeleportCompleted, GameTeleportInitiated, GameUpdateRender, PackageLoaded, Render, ScriptError, WebsitesApproved, jcmp, Argument, BikeHandling, BikeHandlingSteering, BikeHandlingSteeringWheelie, BoatHandling, BoatHandlingFins, BoatHandlingPropellers, BoatHandlingPropellersDockingControls, BoatHandlingSteering, BoatHandlingSteeringSteeringFilter, CarHandling, CarHandlingBrakes, CarHandlingBrakesBrakeAxis, CarHandlingEngine, CarHandlingEngineTransmission, CarHandlingLandGlobal, CarHandlingLandGlobalArcade, CarHandlingLandGlobalArcadePerformanceBoost, CarHandlingLandGlobalArcadeTurboJump, CarHandlingLandGlobalDrift, CarHandlingLandGlobalWheelDamage, CarHandlingSteering, EventInstance, EventSystem, GameObject, HelicopterHandling, HelicopterHandlingModel, HelicopterHandlingSteering, InputAxisTiming, JCMPNamespace, Matrix, Package, PlaneHandling, PlaneHandlingAirSteering, PlaneHandlingEngine, Player, PlayerWeapon, RemoteClient, RGB, RGBA, Server, Vector2, Vector2f, Vector3, Vector3f, Vector4, Vector4f, Vehicle, VehicleHandling, ClientConnected, ClientConnectRequest, ClientDisconnected, PackageLoaded, PlayerCreated, PlayerDeath, PlayerDestroyed, PlayerHijackVehicle, PlayerReady, PlayerRespawn, PlayerVehicleEntered, PlayerVehicleExited, PlayerVehicleSeatChange, ScriptError, VehicleCreated, VehicleDestroyed, VehicleExploded, jcmp, JCMPNamespace, jcmp});
export {Camera, Checkpoint, EventInstance, EventSystem, HealthEffect, JCMPNamespace, JCMPUINamespace, LocalPlayer, Matrix, NetworkPlayer, NetworkVehicle, Package, POI, Renderer, RGB, RGBA, Settings, Texture, TimeOfDay, Vector2, Vector2f, Vector3, Vector3f, Vector4, Vector4f, WebUIWindow, Wingsuit, World, CheckpointEnter, CheckpointLeave, GameRender, GameTeleportCompleted, GameTeleportInitiated, GameUpdateRender, PackageLoaded, Render, ScriptError, WebsitesApproved, jcmp, Argument, BikeHandling, BikeHandlingSteering, BikeHandlingSteeringWheelie, BoatHandling, BoatHandlingFins, BoatHandlingPropellers, BoatHandlingPropellersDockingControls, BoatHandlingSteering, BoatHandlingSteeringSteeringFilter, CarHandling, CarHandlingBrakes, CarHandlingBrakesBrakeAxis, CarHandlingEngine, CarHandlingEngineTransmission, CarHandlingLandGlobal, CarHandlingLandGlobalArcade, CarHandlingLandGlobalArcadePerformanceBoost, CarHandlingLandGlobalArcadeTurboJump, CarHandlingLandGlobalDrift, CarHandlingLandGlobalWheelDamage, CarHandlingSteering, EventInstance, EventSystem, GameObject, HelicopterHandling, HelicopterHandlingModel, HelicopterHandlingSteering, InputAxisTiming, JCMPNamespace, Matrix, Package, PlaneHandling, PlaneHandlingAirSteering, PlaneHandlingEngine, Player, PlayerWeapon, RemoteClient, RGB, RGBA, Server, Vector2, Vector2f, Vector3, Vector3f, Vector4, Vector4f, Vehicle, VehicleHandling, ClientConnected, ClientConnectRequest, ClientDisconnected, PackageLoaded, PlayerCreated, PlayerDeath, PlayerDestroyed, PlayerHijackVehicle, PlayerReady, PlayerRespawn, PlayerVehicleEntered, PlayerVehicleExited, PlayerVehicleSeatChange, ScriptError, VehicleCreated, VehicleDestroyed, VehicleExploded, jcmp, JCMPNamespace, jcmp};