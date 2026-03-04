(function () {
  const style = document.createElement("style");
  const template = document.createElement("template");
  style.textContent = `
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");


:host {
  display: block;
  background: transparent !important;
  position: relative;
  z-index: 0; /* ou une valeur nÃ©gative si nÃ©cessaire */
}


table {
  width: 100%;
  border-collapse: separate; /* nÃ©cessaire pour spacing entre colonnes */
  border-spacing: 1px; /* 1px blanc entre colonnes */
  border-radius: 12px;
  overflow: hidden;
  background: transparent; /* le filet sera blanc */
}

thead tr {
  background-color: rgba(16,24,40,0.02); /* entÃªte gris clair */
}

tbody tr:nth-child(odd) {
  background-color: transparent; /* lignes impaires blanches */
}

tbody tr:nth-child(even) {
  background-color: #f4f4f4; /* lignes paires gris clair */
}

td, th {
  padding: 8px;
  background-color: inherit; /* hÃ©rite du parent pour que spacing reste blanc */
  vertical-align: middle;
}

button {
  border: none;
  text-decoration: none;
  white-space: nowrap;
  min-width: 80px;
  color: #000000;
  transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: 'CiscoSansTT Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--button-secondary-border-color);
  cursor: pointer;
  background-color: #ffffff;
}
button:hover {
  background-color: #e6e3e3;
}

.mylabel {
         width:281px;
         height:50px;
         display:   inline-block; 
      }


.scrollable-container {
  padding: 10px;
  background: transparent !important;
}
.scrollable-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.scrollable-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.scrollable-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#table-container {
  border-radius: 12px;           /* coins arrondis pour le container */
  overflow: hidden;              /* pour que le tableau s'arrÃªte aux coins */
  background-color: #ffffff;     /* ou gris clair si tu veux */
  border: 0px solid #ddd;        /* contour identique au tableau */
  box-sizing: border-box;
}

#table-container table {
  border-radius: 0 0 12px 12px;  /* coins bas arrondis pour le tableau */
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
  background-color: #f4f4f4;  /* mÃªme gris clair que le thead */
  border-radius: 12px;              /* arrondi sur tous les coins */
  border: 0px solid #ddd;           /* filet comme le tableau */
  box-sizing: border-box;
  margin-bottom: 10px;
}


.queue-count {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.queue-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.queue-filter label {
  font-size: 14px;
  font-weight: 500;
  color: #555;
}

.queue-filter select {
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: #333;
  cursor: pointer;
  min-width: 200px;
}

.queue-filter select:hover {
  border-color: #00a0d1;
}

.queue-filter select:focus {
  outline: none;
  border-color: #00a0d1;
  box-shadow: 0 0 0 2px rgba(0, 160, 209, 0.1);
}

.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  justify-content: center;
  align-items: center;
}

.modal-overlay.active {
  display: flex;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  min-width: 400px;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  margin-bottom: 20px;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.modal-body {
  margin-bottom: 25px;
}

.modal-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
}

.modal-input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.modal-input:focus {
  outline: none;
  border-color: #00a0d1;
  box-shadow: 0 0 0 3px rgba(0, 160, 209, 0.1);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-btn-cancel {
  background-color: #f5f5f5;
  color: #333;
}

.modal-btn-cancel:hover {
  background-color: #e0e0e0;
}

.modal-btn-confirm {
  background-color: #00a0d1;
  color: white;
}

.modal-btn-confirm:hover {
  background-color: #008bb8;
}

.modal-btn-confirm:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

tache-fille-hover {
  cursor: pointer;
  color: #00a0d1;
  text-decoration: underline;
  position: relative;
}

.tache-fille-hover:hover {
  color: #008bb8;
}

task-details-row {
  background-color: rgba(16,24,40,0.02) !important;
  border-left: 3px solid #ddd !important;
}

.task-details-cell {
  padding: 20px !important;
}

.task-details-loading {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}
`;
  template.innerHTML = `

       <div class="scrollable-container">
        <div class="table-header">
          <div class="queue-count" id="queue-count">Chargement...</div>
          <div class="queue-filter">
            <label for="queue-select">Filtrer par file:</label>
            <select id="queue-select">
              <option value="all">File:</option>
            </select>
          </div>
        </div>
        <div id="table-container"></div>   
      </div>
    <label class="mylabel" id="submitted"></label>
   
    <!-- Modal for Agent Name Input -->
    <div id="agent-modal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">RÃ©affecter la tÃ¢che</h2>
        </div>
        <div class="modal-body">
          <label class="modal-label" for="agent-name-input">Nom de l'agent (Agent Name):</label>
          <input type="text" id="agent-name-input" class="modal-input" placeholder="Entrez le nom de l'agent" />
        </div>
        <div class="modal-footer">
          <button class="modal-btn modal-btn-cancel" id="modal-cancel-btn">Annuler</button>
          <button class="modal-btn modal-btn-confirm" id="modal-confirm-btn">Confirmer</button>
        </div>
      </div>
    </div>`;

  class SupervisorNavigation extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.timeoutID = undefined;
    }

    connectedCallback() {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.appendChild(style);

      var agentEditable = [];
      var variableType = [];
      var agentViewable = [];
      var reportable = [];
      var active = [];
      var defaultValue = [];
      var gvid = [];
      var gvname = [];
      var checkboxname = [];
      var submitname = [];
      var textareaname = [];
      var remainingname = [];
      var description = [];
      var savedtext = [];

      // Store all tasks and queue names for filtering
      var allTasks = [];
      var availableQueues = [];

      var dc = this.dc.slice(4);
      var org = this.orgId;

      var context = this.shadowRoot;
      var username = this.User;
      var passphrase = this.passPhrase;
      var agentId = this.agentId;
      var teamId = this.teamId;
      console.log("rkanthet agentId:", agentId);
      console.log("rkanthet:", this.accessToken);
      var access_token = this.accessToken;

      // Setup queue filter dropdown event listener
      const queueSelect = context.getElementById("queue-select");
      queueSelect.addEventListener("change", (e) => {
        FilterTasksByQueue(e.target.value);
      });

      console.log("[TEXTWIDGET] - Using provided access token");
      GetGlobalVariables({ token: access_token });

      function GetGlobalVariables(result) {
        access_token = result.token;

        // First fetch the assignable queues
        FetchAssignableQueues();
      }

      function FetchAssignableQueues() {
        console.log("[QUEUEFETCH] - Using hardcoded queue IDs");

        // Hardcoded queue IDs
        const hardcodedQueueIds = [
          "46d7dc88-f294-44a7-a87b-81eaa78968ec",
          "94da65d1-5630-4674-b25f-bc2a282d5d3b",
          "c0badc8c-4ede-40e8-be9f-c8bcb5e7a810",
          "979f1776-06ce-4cc4-881b-199cda4f46fe",
        ];

        // Fetch queue details to get names for these IDs
        const myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
        myHeaders.append("Authorization", "Bearer " + access_token);
        myHeaders.append("Content-Type", "application/json");

        // Fetch each queue's details to get the name
        const queueFetchPromises = hardcodedQueueIds.map((queueId) => {
          const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          return fetch(
            `https://api.wxcc-${dc}.cisco.com/organization/${org}/contact-service-queue/${queueId}`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(
                `[QUEUEFETCH] - Queue details fetched for ${queueId}:`,
                result
              );
              return {
                id: queueId,
                name: result.name || queueId, // Use ID as fallback if name not found
              };
            })
            .catch((error) => {
              console.log(
                `[QUEUEFETCH] - ERROR fetching queue ${queueId} - `,
                error
              );
              return {
                id: queueId,
                name: queueId, // Use ID as name on error
              };
            });
        });

        // Wait for all queue details to be fetched
        Promise.all(queueFetchPromises)
          .then((queues) => {
            console.log("[QUEUEFETCH] - All queue details fetched:", queues);
            // Create a result structure similar to what ProcessQueues expects
            const result = {
              data: queues,
            };
            ProcessQueues(result);
          })
          .catch((error) => {
            console.log(
              "[QUEUEFETCH] - ERROR fetching queue details - ",
              error
            );
          });
      }

      function ProcessQueues(queuesData) {
        console.log("[QUEUEFETCH] - Processing queues:", queuesData);

        if (queuesData && queuesData.data) {
          const queueNames = queuesData.data.map((queue) => queue.name);
          console.log("[QUEUEFETCH] - Queue names:", queueNames);

          // Store available queues
          availableQueues = queueNames;

          // Populate dropdown
          PopulateQueueDropdown(queueNames);

          // Fetch tasks for all queues
          FetchTasksForAllQueues(queueNames);
        }
      }

      function PopulateQueueDropdown(queueNames) {
        const queueSelect = context.getElementById("queue-select");

        // Clear existing options except "All"
        queueSelect.innerHTML = '<option value="all">Toutes les files</option>';

        // Add queue options
        queueNames.forEach((queueName) => {
          const option = document.createElement("option");
          option.value = queueName;
          option.textContent = queueName;
          queueSelect.appendChild(option);
        });
      }

      function FetchTasksForAllQueues(queueNames) {
        console.log("[TASKFETCH] - Fetching tasks for all queues");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + access_token);

        // Get current time in milliseconds (epoch)
        const currentTimeMs = Date.now().toString();

        // Step 1: Fetch task IDs for each queue using taskLegDetails
        const fetchTaskIdsPromises = queueNames.map((queueName) => {
          const raw = JSON.stringify({
            query: `
{
  taskLegDetails(
    from: "1767874520000"
    to: "${currentTimeMs}"
    filter: { 
      queue: { 
        name: { equals: "${queueName}" }  
      }
    }
  ) {
    taskLegs { 
      taskId
      queue {name}
      handleType
      status
    }
  }
}
`,
            variables: {},
          });

          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          return fetch(
            "https://api.wxcc-"+dc+".cisco.com/search?orgId=" + org,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(
                `[TASKFETCH] - Task IDs fetched for queue: ${queueName}`,
                result
              );
              return result;
            })
            .catch((error) => {
              console.log(
                `[TASKFETCH] - ERROR fetching task IDs for queue ${queueName} - `,
                error
              );
              return { data: { taskLegDetails: { taskLegs: [] } } };
            });
        });

        // Wait for all task ID fetches to complete
        Promise.all(fetchTaskIdsPromises)
          .then((results) => {
            // Extract all unique task IDs
            const taskIdsSet = new Set();
            const taskStatusMap = new Map(); // Store status from taskLeg

            results.forEach((result) => {
              if (
                result.data &&
                result.data.taskLegDetails &&
                result.data.taskLegDetails.taskLegs
              ) {
                result.data.taskLegDetails.taskLegs.forEach((taskLeg) => {
                  if (taskLeg.taskId) {
                    taskIdsSet.add(taskLeg.taskId);

                    // Store the status from taskLeg
                    // If task already exists, prioritize "parked" status
                    const existingEntry = taskStatusMap.get(taskLeg.taskId);

                    if (!existingEntry) {
                      // First time seeing this task, store it
                      taskStatusMap.set(taskLeg.taskId, {
                        status: taskLeg.status,
                        queueName: taskLeg.queue?.name,
                      });
                    } else if (
                      taskLeg.status === "parked" &&
                      existingEntry.status !== "parked"
                    ) {
                      // If new status is "parked" and existing is not, update to "parked"
                      taskStatusMap.set(taskLeg.taskId, {
                        status: taskLeg.status,
                        queueName: taskLeg.queue?.name,
                      });
                    }
                    // Otherwise keep the existing entry
                  }
                });
              }
            });

            const taskIds = Array.from(taskIdsSet);
            console.log(
              `[TASKFETCH] - Total unique task IDs: ${taskIds.length}`
            );
            console.log(
              `[TASKFETCH] - Task status map:`,
              Array.from(taskStatusMap.entries())
            );

            if (taskIds.length === 0) {
              DisplayTasks({ data: { task: { tasks: [] } } }, context);
              return;
            }

            // Step 2: Fetch full details for each task
            FetchTaskDetails(taskIds, taskStatusMap);
          })
          .catch((error) => {
            console.log("[TASKFETCH] - ERROR processing task IDs - ", error);
          });
      }

      function FetchTaskDetails(taskIds, taskStatusMap) {
        console.log("[TASKDETAILS] - Fetching details for tasks");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + access_token);

        // Get current time in milliseconds (epoch)
        const currentTimeMs = Date.now().toString();

        // Fetch details for each task ID
        const fetchDetailsPromises = taskIds.map((taskId) => {
          const raw = JSON.stringify({
            query: `
{
  task(
    from: "1765774329000"
    to: "${currentTimeMs}"
    filter:{ 
      id: { equals: "${taskId}"}
    }
  ) {
    tasks {
      id
      origin
      status
      createdTime
      customer {
        name
      }
      channelMetaData{
        email{
          subject
        }
      }
      stringGlobalVariables(name: "RefSinistre") {
        name
        value
      }
      Reactivation: stringGlobalVariables(name: "DateReactivationTache") {
        name
        value
      }
      TacheFille: stringGlobalVariables(name:"TacheFille") {
        name
        value
      }
    }
  }
}
`,
            variables: {},
          });

          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          return fetch(
            "https://api.wxcc-"+dc+".cisco.com/search?orgId=" + org,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              // Add queue name from taskStatusMap
              if (
                result.data &&
                result.data.task &&
                result.data.task.tasks &&
                result.data.task.tasks.length > 0
              ) {
                console.log(
                  `[TASKFETCH] - Total unique tasks: ${result.data.task.tasks[0]}`
                );
                const task = result.data.task.tasks[0];
                const taskInfo = taskStatusMap.get(taskId);
                if (taskInfo) {
                  task.lastQueue = { name: taskInfo.queueName };
                  // Use status from taskLeg if task status is not available
                  if (!task.status) {
                    task.status = taskInfo.status;
                  }
                }
                // Map Reactivation to Datereactivation for consistency
                task.Datereactivation = task.Reactivation;
              }
              return result;
            })
            .catch((error) => {
              console.log(
                `[TASKDETAILS] - ERROR fetching details for task ${taskId} - `,
                error
              );
              return { data: { task: { tasks: [] } } };
            });
        });

        // Wait for all task detail fetches to complete
        Promise.all(fetchDetailsPromises)
          .then((results) => {
            // Combine all tasks
            const combinedTasks = [];
            results.forEach((result) => {
              if (
                result.data &&
                result.data.task &&
                result.data.task.tasks &&
                result.data.task.tasks.length > 0
              ) {
                console.log(
                  `[TASKFETCH] - Total unique tasks: ${result.data.task.tasks}`
                );
                combinedTasks.push(...result.data.task.tasks);
              }
            });

            // Store all tasks globally
            allTasks = combinedTasks;

            console.log(
              "[TASKDETAILS] - Total tasks with details:",
              allTasks.length
            );
            DisplayTasks({ data: { task: { tasks: allTasks } } }, context);
          })
          .catch((error) => {
            console.log(
              "[TASKDETAILS] - ERROR combining task details - ",
              error
            );
          });
      }

      function DisplayTasks(result, context) {
        console.log("rkanthet: result", result);
        const tableContainer = context.getElementById("table-container");

        if (!result.data || !result.data.task || !result.data.task.tasks) {
          tableContainer.innerHTML = "<p>No tasks found.</p>";
          UpdateTaskCount(0);
          return;
        }

        const tasks = result.data.task.tasks;

        // Filter to only show tasks with "parked" status
        const parkedTasks = tasks.filter((task) => {
          const status = task.status || "";
          return status.toLowerCase() === "parked";
        });

        console.log(
          `[FILTER] - Total tasks: ${tasks.length}, Parked tasks: ${parkedTasks.length}`
        );

        // Update task count with parked tasks only
        UpdateTaskCount(parkedTasks.length);

        tableContainer.innerHTML = generateTaskTable(tasks);

        // Add event listeners for requeue buttons (only for parked tasks)
        parkedTasks.forEach((task) => {
          const requeueBtn = context.getElementById(`requeue-btn-${task.id}`);
          if (requeueBtn) {
            requeueBtn.addEventListener("click", () => requeueTask(task.id));
          }
        });

        // Attach click listeners for Tache Fille cells
        AttachTacheFilleClickListeners(access_token);
      }

      function UpdateTaskCount(count) {
        const countElement = context.getElementById("queue-count");
        countElement.textContent = `Nb d'interactions: ${count}`;
      }

      function FilterTasksByQueue(selectedQueue) {
        console.log("[FILTER] - Filtering by queue:", selectedQueue);

        // First filter by parked status, then by queue
        let filteredTasks = allTasks.filter((task) => {
          const status = task.status || "";
          return status.toLowerCase() === "parked";
        });

        if (selectedQueue !== "all") {
          filteredTasks = filteredTasks.filter(
            (task) => task.lastQueue?.name === selectedQueue
          );
        }

        console.log(
          `[FILTER] - Parked tasks: ${filteredTasks.length} (Queue: ${selectedQueue})`
        );
        DisplayTasks({ data: { task: { tasks: filteredTasks } } }, context);
      }

      function requeueTask(taskId) {
        console.log(`[REQUEUE] - Requeuing task ${taskId}`);

        // Get modal elements
        const modal = context.getElementById("agent-modal");
        const agentInput = context.getElementById("agent-name-input");
        const cancelBtn = context.getElementById("modal-cancel-btn");
        const confirmBtn = context.getElementById("modal-confirm-btn");

        // Clear previous input
        agentInput.value = "";

        // Show modal
        modal.classList.add("active");
        agentInput.focus();

        // Handle modal close
        const closeModal = () => {
          modal.classList.remove("active");
          agentInput.value = "";
        };

        // Handle cancel
        const handleCancel = () => {
          console.log("[REQUEUE] - Requeue cancelled by user");
          closeModal();
        };

        // Handle confirm
        const handleConfirm = () => {
          const agentName = agentInput.value.trim();

          // Check if agent name is provided
          if (!agentName) {
            agentInput.focus();
            return;
          }

          // Close modal
          closeModal();

          // Prepare webhook payload
          const payload = {
            TaskId: taskId,
            agentname: agentName,
          };

          console.log("[REQUEUE] - Sending requeue request:", payload);

          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            redirect: "follow",
          };

          fetch(
            "https://hooks.eu.webexconnect.io/events/ZK9KEEWE8J",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              console.log("[REQUEUE] - Task requeued successfully:", result);
              alert(
                `TÃ¢che ${taskId} rÃ©affectÃ©e avec succÃ¨s Ã   ${agentName}!\n\nTask ${taskId} requeued successfully to ${agentName}!`
              );
            })
            .catch((error) => {
              console.log("[REQUEUE] - ERROR requeuing task - ", error);
              alert(
                `Erreur lors de la rÃ©affectation de la tÃ¢che.\n\nError requeuing task: ${error}`
              );
            });
        };

        // Handle Enter key in input
        const handleKeyPress = (e) => {
          if (e.key === "Enter") {
            handleConfirm();
          } else if (e.key === "Escape") {
            handleCancel();
          }
        };

        // Add event listeners (remove old ones first to prevent duplicates)
        cancelBtn.removeEventListener("click", handleCancel);
        confirmBtn.removeEventListener("click", handleConfirm);
        agentInput.removeEventListener("keypress", handleKeyPress);

        cancelBtn.addEventListener("click", handleCancel);
        confirmBtn.addEventListener("click", handleConfirm);
        agentInput.addEventListener("keypress", handleKeyPress);

        // Close modal when clicking outside
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            handleCancel();
          }
        });
      }

      function generateTaskTable(tasks) {
        // Function to translate status to French with English in parentheses
        function translateStatus(status) {
          console.log("Original status value:", status); // Debug log
          const statusMap = {
            parked: "En attente",
            PARKED: "En attente",
            Parked: "En attente",
            ended: "TraitÃ©e",
            Ended: "TraitÃ©e",
            ENDED: "TraitÃ©e",
            connected: "En traitement",
            Connected: "En traitement",
            CONNECTED: "En traitement",
          };
          const translated = statusMap[status] || status;
          console.log("Translated status:", translated); // Debug log
          return translated;
        }

        // Filter to only show tasks with "parked" status
        const parkedTasks = tasks.filter((task) => {
          const status = task.status || "";
          return status.toLowerCase() === "parked";
        });

        console.log(
          `[FILTER] - Total tasks: ${tasks.length}, Parked tasks: ${parkedTasks.length}`
        );

        let table =
          '<table style="width:100%; border-collapse: collapse; table-layout: fixed; font-size: 12px;">';
        table += `
        <thead>
          <tr>
            <th style="width: 9%;">File</th>
            <th style="width: 5%;">Canal</th>
            <th style="width: 15%;">Nom</th>
            <th style="width: 12%;">Date</th>
            <th style="width: 22%;">Sujet</th>
            <th style="width: 8%;">Statut</th>
            <th style="width: 6%;">RÃ©activation</th>
            <th style="width: 6%;">Tache Fille</th>
            <th style="width: 17%;"></th>
          </tr>
        </thead>
        <tbody>
      `;

        parkedTasks.forEach((task, index) => {
          console.log("rkanthet task:", task);
          const queueName = task.lastQueue?.name || "N/A";
          const name = task.customer?.name || "N/A";
          const channel = "email"; // From the query filter
          const time = task.createdTime
            ? new Date(task.createdTime).toLocaleString()
            : "N/A";
          const subject = task.channelMetaData?.email?.subject || "N/A";
          const rawStatus = task.status || "N/A";
          const status = translateStatus(rawStatus);

          // Handle TacheFille - show "Not applicable" if null/empty
          let tacheFille = "Aucune";
          let tacheFilleTaskId = null;
          if (task.TacheFille && task.TacheFille.value) {
            tacheFilleTaskId = task.TacheFille.value;
            tacheFille = `<span class="tache-fille-hover" data-task-id="${tacheFilleTaskId}">Oui</span>`;
          }

          // Handle DateReactivation - show empty if null, otherwise show value
          let dateReactivation = "";
          if (task.Datereactivation && task.Datereactivation.value) {
            // Convert epoch timestamp to readable date
            const epochValue = task.Datereactivation.value;
            dateReactivation = new Date(parseInt(epochValue)).toLocaleString();
          } else if (task.Reactivation && task.Reactivation.value) {
            // Fallback to Reactivation if Datereactivation is not available
            const epochValue = task.Reactivation.value;
            dateReactivation = new Date(parseInt(epochValue)).toLocaleString();
          }

          // Show button only if status is "parked"
          let actionButton = "";
          if (rawStatus === "parked") {
            actionButton = `<button id="requeue-btn-${task.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" style="display:inline-block;vertical-align:middle;">
            <path d="M29.53 20.47a.75.75 0 0 0-1.06 0L23 25.94l-3.47-3.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06M17.885 27.95c-5.111.808-10.884-.077-13.145-2.009a2.43 2.43 0 0 1-.99-1.871c0-5.052 4.695-9.32 10.25-9.32a10.6 10.6 0 0 1 8.827 4.659.75.75 0 0 0 1.256-.82 11.92 11.92 0 0 0-6.704-4.844 6.25 6.25 0 1 0-6.788-.01c-4.768 1.383-8.34 5.556-8.34 10.335a3.94 3.94 0 0 0 1.515 3.01c2.17 1.856 6.323 2.657 10.257 2.657a27 27 0 0 0 4.095-.305.75.75 0 1 0-.233-1.482M9.242 8.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0" fill="currentColor"/>
          </svg>
          RÃ©affecter
        </button>`;
          }

          table += `
          <tr>
            <td>${queueName}</td>
            <td>${channel}</td>
            <td>${name}</td>
            <td>${time}</td>
            <td>${subject}</td>
            <td>${status}</td>
            <td>${dateReactivation}</td>
            <td>${tacheFille}</td>
            <td>${actionButton}</td>
          </tr>
        `;
        });

        table += "</tbody></table>";
        return table;
      }

      function FetchTacheFilleDetails(taskId, accessToken) {
        console.log(`[TACHE_FILLE] - Fetching details for task: ${taskId}`);

        const currentTimeMs = Date.now().toString();
        const graphqlQuery = {
          query: `{
            task(
              from: "1765774329000"
              to: "${currentTimeMs}"
              filter: { 
                id: { equals: "${taskId}" }
              }
            ) {
              tasks {
                id
                origin
                channelMetaData {
                  email {
                    subject
                  }
                }
                stringGlobalVariables(name: "RefSinistre") {
                  name
                  value
                }
                Reactivation: stringGlobalVariables(name: "DateReactivationTache") {
                  name
                  value
                }
                TacheFille: stringGlobalVariables(name: "TacheFille") {
                  name
                  value
                }
              }
            }
          }`,
          variables: {},
        };

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(graphqlQuery),
          redirect: "follow",
        };

        return fetch(
          "https://api.wxcc-"+dc+".cisco.com/search?orgId="+org,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("[TACHE_FILLE] - Task details fetched:", result);
            return result;
          })
          .catch((error) => {
            console.error(
              "[TACHE_FILLE] - ERROR fetching task details:",
              error
            );
            throw error;
          });
      }

      function ToggleTaskDetails(taskId, clickedRow, accessToken) {
        console.log("[TASK_DETAILS] - Toggling details for task:", taskId);

        // Check if details row already exists
        const existingDetailsRow = context.getElementById(
          `details-row-${taskId}`
        );

        if (existingDetailsRow) {
          // If it exists, remove it
          console.log("[TASK_DETAILS] - Removing existing details row");
          existingDetailsRow.remove();
          return;
        }

        // Create a new row for details
        const detailsRow = document.createElement("tr");
        detailsRow.id = `details-row-${taskId}`;
        detailsRow.className = "task-details-row";

        // Get the number of columns in the main table
        const columnCount = clickedRow.cells.length;

        // Create a single cell that spans all columns
        const detailsCell = document.createElement("td");
        detailsCell.colSpan = columnCount;
        detailsCell.className = "task-details-cell";
        detailsCell.innerHTML =
          '<div class="task-details-loading">Chargement des dÃ©tails...</div>';

        detailsRow.appendChild(detailsCell);

        // Insert the details row right after the clicked row
        clickedRow.parentNode.insertBefore(detailsRow, clickedRow.nextSibling);

        // Fetch task details
        FetchTacheFilleDetails(taskId, accessToken)
          .then((result) => {
            if (
              !result.data ||
              !result.data.task ||
              !result.data.task.tasks ||
              result.data.task.tasks.length === 0
            ) {
              detailsCell.innerHTML =
                '<div class="task-details-loading">Aucune donnÃ©e disponible</div>';
              return;
            }

            const taskDetails = result.data.task.tasks[0];

            const queueName = taskDetails.lastQueue?.name || "Aucune";
            const name =
              taskDetails.customer?.name || taskDetails.origin || "Aucune";
            const channel = "email"; // From the query filter
            const time = taskDetails.createdTime
              ? new Date(taskDetails.createdTime).toLocaleString()
              : "Aucune";
            const subject =
              taskDetails.channelMetaData?.email?.subject || "Aucune";
            const rawStatus = taskDetails.status || "Aucune";

            // Translate status
            function translateStatus(status) {
              const statusMap = {
                parked: "En attente",
                PARKED: "En attente",
                Parked: "En attente",
                ended: "TraitÃ©e",
                Ended: "TraitÃ©e",
                ENDED: "TraitÃ©e",
                connected: "En traitement",
                Connected: "En traitement",
                CONNECTED: "En traitement",
              };
              return statusMap[status] || status;
            }

            const status = translateStatus(rawStatus);

            // Handle TacheFille
            let nestedTacheFille = "Aucune";
            if (taskDetails.TacheFille && taskDetails.TacheFille.value) {
              nestedTacheFille = "Oui";
            }

            // Handle DateReactivation
            let dateReactivation = "";
            if (
              taskDetails.Datereactivation &&
              taskDetails.Datereactivation.value
            ) {
              // Convert epoch timestamp to readable date
              const epochValue = taskDetails.Datereactivation.value;
              dateReactivation = new Date(
                parseInt(epochValue)
              ).toLocaleString();
            } else if (
              taskDetails.Reactivation &&
              taskDetails.Reactivation.value
            ) {
              // Convert epoch timestamp to readable date
              const epochValue = taskDetails.Reactivation.value;
              dateReactivation = new Date(
                parseInt(epochValue)
              ).toLocaleString();
            }

            // Show button only if status is "parked"
            let actionButton = "";
            if (rawStatus && rawStatus.toLowerCase() === "parked") {
              actionButton = `<button id="requeue-btn-child-${taskDetails.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" style="display:inline-block;vertical-align:middle;">
                  <path d="M29.53 20.47a.75.75 0 0 0-1.06 0L23 25.94l-3.47-3.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06M17.885 27.95c-5.111.808-10.884-.077-13.145-2.009a2.43 2.43 0 0 1-.99-1.871c0-5.052 4.695-9.32 10.25-9.32a10.6 10.6 0 0 1 8.827 4.659.75.75 0 0 0 1.256-.82 11.92 11.92 0 0 0-6.704-4.844 6.25 6.25 0 1 0-6.788-.01c-4.768 1.383-8.34 5.556-8.34 10.335a3.94 3.94 0 0 0 1.515 3.01c2.17 1.856 6.323 2.657 10.257 2.657a27 27 0 0 0 4.095-.305.75.75 0 1 0-.233-1.482M9.242 8.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0" fill="currentColor"/>
                </svg>
                RÃ©affecter
              </button>`;
            }

            // Create a single row matching the main table structure
            detailsCell.innerHTML = `
              <div>
                <table style="width:100%; border-collapse: collapse; table-layout: fixed; font-size: 11px;">
                  <tbody>
                    <tr>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 9%;">${queueName}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 5%;">${channel}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 15%;">${name}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 12%;">${time}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 22%;">${subject}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 8%;">${status}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 6%;">${dateReactivation}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 6%;">${nestedTacheFille}</td>
                      <td style="background-color: white; padding: 6px; border: 2px solid #f4f4f4; width: 12%;">${actionButton}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `;

            // Attach event listener for the child task requeue button
            if (rawStatus && rawStatus.toLowerCase() === "parked") {
              const childRequeueBtn = detailsCell.querySelector(
                `#requeue-btn-child-${taskDetails.id}`
              );
              if (childRequeueBtn) {
                childRequeueBtn.addEventListener("click", function () {
                  requeueTask(taskDetails.id);
                });
              }
            }

            console.log("[TASK_DETAILS] - Details displayed successfully");
          })
          .catch((error) => {
            console.error(
              "[TASK_DETAILS] - ERROR fetching task details:",
              error
            );
            detailsCell.innerHTML =
              '<div class="task-details-loading">Erreur lors du chargement</div>';
          });
      }

      function AttachTacheFilleClickListeners(accessToken) {
        console.log("[TASK_DETAILS] - Attaching click listeners...");
        const tacheFilleElements =
          context.querySelectorAll(".tache-fille-hover");

        console.log(
          "[TASK_DETAILS] - Found",
          tacheFilleElements.length,
          "tache fille elements"
        );

        tacheFilleElements.forEach((element, index) => {
          const taskId = element.getAttribute("data-task-id");
          console.log(
            `[TASK_DETAILS] - Attaching listener ${index + 1} for task:`,
            taskId
          );

          element.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("[TASK_DETAILS] - Clicked on task:", taskId);

            // Find the parent row
            let clickedRow = element.closest("tr");
            if (clickedRow) {
              ToggleTaskDetails(taskId, clickedRow, accessToken);
            } else {
              console.error("[TASK_DETAILS] - Could not find parent row");
            }
          });
        });
      }

      context.addEventListener("paste", (e) => {
        let data = e.clipboardData.getData("text/plain");
        //   text.innerHTML = data;
        //      var textarealength = e.srcElement.value.length+data.length;
        //      e.srcElement.nextSibling.innerHTML=textarealength+"/256";
        e.srcElement.nextSibling.innerHTML = "";
      });

      context.addEventListener("keyup", (e) => {
        // Check if the event source is a textarea or a number input
        if (e.srcElement.nodeName === "TEXTAREA") {
          // Original character count logic (commented out in user's code)
          // var textarealength = e.srcElement.value.length;
          // e.srcElement.nextSibling.innerHTML=textarealength+"/256";
          e.srcElement.nextSibling.innerHTML = "";
          ValueChanged(e.srcElement); // Call the generic value change handler
        } else if (e.srcElement.type === "number") {
          // MODIFIED: Added condition for number input
          ValueChanged(e.srcElement); // Call the generic value change handler
        }
      });

      // rkanthet: Listen for change events on number inputs (for up/down arrow clicks)
      context.addEventListener("change", (e) => {
        if (e.srcElement.type === "number") {
          ValueChanged(e.srcElement);
        }
      });

      // rkanthet: Listen for input events on number inputs (for real-time updates)
      context.addEventListener("input", (e) => {
        if (e.srcElement.type === "number") {
          ValueChanged(e.srcElement);
        }
      });

      context.addEventListener("click", (e) => {
        buttonclicked(e.srcElement);
      });

      function buttonclicked(id) {
        // Get number
        if (id.nodeName == "INPUT" && id.type === "checkbox") {
          checkboxticked(id);
        } else if (id.nodeName == "BUTTON") {
          // Ignore requeue buttons - they have their own event handlers
          if (id.id && id.id.startsWith("requeue-btn-")) {
            return;
          }
          submitticked(id);
        }
      }

      function checkboxticked(id) {
        // Get number
        var checkboxid = context.getElementById(id.id);

        var index = checkboxid.dataset.index || id.id.replace(/\D/g, "");
        var submitboxid = context.getElementById("submit" + index);
        submitboxid.style.backgroundColor = "#00a0d1";
        submitboxid.disabled = false;

        if (checkboxid.checked == true) {
          defaultValue[index] = "true";
        } else {
          defaultValue[index] = "false";
        }

        if (defaultValue[index] == savedtext[index]) {
          submitboxid.style.backgroundColor = "lightgrey";
          submitboxid.disabled = true;
        } else {
          submitboxid.style.backgroundColor = "#00a0d1";
          submitboxid.disabled = false;
        }
      }

      // Renamed from StringChanged to ValueChanged for generic handling
      function ValueChanged(id) {
        var index = id.dataset.index || id.id.replace(/\D/g, "");
        var submitboxid = context.getElementById("submit" + index);

        // Compare current value with saved value.
        // For numbers, id.value will be a string, and savedtext[index] is also a string.
        // Strict equality comparison `===` is appropriate here.
        if (id.value === savedtext[index]) {
          submitboxid.style.backgroundColor = "lightgrey";
          submitboxid.disabled = true;
        } else {
          submitboxid.style.backgroundColor = "#00a0d1";
          submitboxid.disabled = false;
        }

        defaultValue[index] = id.value;
      }

      function submitticked(id) {
        var submitboxid = context.getElementById(id.id);
        submitboxid.style.backgroundColor = "lightgrey";
        submitboxid.disabled = true;

        var index = submitboxid.dataset.index || id.id.replace(/\D/g, "");
        savedtext[index] = defaultValue[index];

        // --- ADDED/MODIFIED LINES START HERE ---
        let valueToSubmit = defaultValue[index]; // Start with the current value
        if (variableType[index] === "Integer") {
          // Convert to an integer. parseInt will convert the string "123" to the number 123.
          // The second argument (10) ensures it's parsed as a base-10 number.
          valueToSubmit = parseInt(defaultValue[index], 10);
          // Optional: Add a check for NaN (Not a Number) if the input wasn't a valid integer.
          // This would prevent sending invalid data to the API and could provide better user feedback.
          if (isNaN(valueToSubmit)) {
            console.error(
              "Attempted to submit a non-integer value for an Integer variable:",
              gvname[index],
              defaultValue[index]
            );
            // You might want to update the 'submitted' label with an error here
            // submittedboxid.innerHTML = "Error: Invalid integer value.";
            return; // Stop the submission if it's not a valid number
          }
        }
        // --- ADDED/MODIFIED LINES END HERE ---

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + access_token);

        const raw = JSON.stringify({
          agentEditable: agentEditable[index],
          variableType: variableType[index],
          agentViewable: agentViewable[index],
          reportable: reportable[index],
          active: active[index],
          defaultValue: valueToSubmit, // <--- Use the potentially converted value here
          id: gvid[index],
          name: gvname[index],
          description: description[index],
          sensitive: false,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        console.log(requestOptions);

        fetch(
          "https://api.wxcc-"+dc+".cisco.com/organization/"+org +"/cad-variable/" +gvid[index],
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            updatelabel(JSON.parse(result));
          })
          .catch((error) => console.log("[TEXTWIDGET] - ERROR - ", error));
      }

      function updatelabel(result) {
        var submittedboxid = context.getElementById("submitted");

        // Check for errors
        if (result.error) {
          submittedboxid.innerHTML =
            "Erreur : " + result.error.message[0].description;
        } else {
          submittedboxid.innerHTML = "SuccÃ¨s!";
        }
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log(
        `Custom element attributes changed. name: ${name}, oldValue: ${oldValue}, newValue: ${newValue}`
      );

    }
  }

  customElements.define("supervisor-navigation", SupervisorNavigation);
})();
