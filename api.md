## Classes

<dl>
<dt><a href="#IdentityClient">IdentityClient</a></dt>
<dd><p>The IdentityClient class. Uses an Access Token to find the Org and Project Identity to which it belongs.</p>
</dd>
<dt><a href="#TasksClient">TasksClient</a></dt>
<dd><p>The TasksClient class. Performs various Tasks CRUD operations against the Rightbrain AI API.</p>
</dd>
<dt><a href="#TokenClient">TokenClient</a></dt>
<dd><p>The TokenClient class. Performs a Client Credentials OAuth2 Grant for an given Client ID and Secret.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#NewDefaultTasksClient">NewDefaultTasksClient(options)</a> ⇒ <code>object</code></dt>
<dd><p>Creates a new Tasks Client</p>
</dd>
</dl>

<a name="IdentityClient"></a>

## IdentityClient
The IdentityClient class. Uses an Access Token to find the Org and Project Identity to which it belongs.

**Kind**: global class  
<a name="IdentityClient+GetIdentity"></a>

### identityClient.GetIdentity(accessToken) ⇒ <code>object</code>
Returns the Org and Project ID for a given access token.

**Kind**: instance method of [<code>IdentityClient</code>](#IdentityClient)  

| Param | Description |
| --- | --- |
| accessToken | An access token |

<a name="TasksClient"></a>

## TasksClient
The TasksClient class. Performs various Tasks CRUD operations against the Rightbrain AI API.

**Kind**: global class  

* [TasksClient](#TasksClient)
    * [.Create(definition)](#TasksClient+Create) ⇒ <code>object</code>
    * [.Run(taskID, taskInput, taskRevision)](#TasksClient+Run) ⇒ <code>object</code>

<a name="TasksClient+Create"></a>

### tasksClient.Create(definition) ⇒ <code>object</code>
Creates a new Task

**Kind**: instance method of [<code>TasksClient</code>](#TasksClient)  

| Param | Description |
| --- | --- |
| definition | A task definition as required by the API |

<a name="TasksClient+Run"></a>

### tasksClient.Run(taskID, taskInput, taskRevision) ⇒ <code>object</code>
Runs a Task

**Kind**: instance method of [<code>TasksClient</code>](#TasksClient)  

| Param | Description |
| --- | --- |
| taskID | The ID of the Task to be ran. |
| taskInput | The Task Input required by the Task. |
| taskRevision | If supplied, the revision of the Task to be ran. |

<a name="TokenClient"></a>

## TokenClient
The TokenClient class. Performs a Client Credentials OAuth2 Grant for an given Client ID and Secret.

**Kind**: global class  
<a name="TokenClient+Create"></a>

### tokenClient.Create(clientID, clientSecret) ⇒ <code>string</code>
Create an Access Token

**Kind**: instance method of [<code>TokenClient</code>](#TokenClient)  

| Param | Description |
| --- | --- |
| clientID | The OAuth Client App ID. |
| clientSecret | The OAuth Client App Secret. |

<a name="NewDefaultTasksClient"></a>

## NewDefaultTasksClient(options) ⇒ <code>object</code>
Creates a new Tasks Client

**Kind**: global function  

| Param | Description |
| --- | --- |
| options | An object of options to replace the defaults. |

