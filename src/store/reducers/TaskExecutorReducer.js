import {createSlice} from "@reduxjs/toolkit"
import {
	clickOnTask,
	filterExecutorTask,
	getAllTasks,
	getCompletedOrders,
	getNotConfirmedEmployer,
	getOrdersNotSelected,
	getResponseOrders,
	getWorkOrders,
	postFinshInWork,
	taskCountExecutor,
} from "../actions/TaskExecutorActions"

const taskExecutorSlice = createSlice({
	name: "taskExecutor",
	initialState: {
		error: false,
		load: false,
		loadBtn: false,
		successWork: false,
		isSubmited: false,
		message: "",
		tasks: [],
		taskCount: "",
	},
	reducers: {
		setTaskExecutorInitialState: {
			error: false,
			load: false,
			loadBtn: false,
			successWork: false,
			isSubmited: false,
			message: "",
			tasks: [],
			count: {},
		},
		setTaskCount: (state, {payload}) => {},

		resetPartReducer: state => {
			state.successWork = false
			state.error = false
			state.message = ""
		},
		resetMessage: state => {
			state.message = ""
		},
		setSuccess: (state, {payload}) => {
			state.successWork = payload
		},
		rejectTask: (state, {payload}) => {
			state.message = payload
			state.error = false
			state.successWork = true
		},
		setCount: (state, {payload}) => {
			state.count = payload
		},
	},
	extraReducers: {
		[filterExecutorTask.pending]: state => {
			state.load = true
		},
		[filterExecutorTask.fulfilled]: (state, {payload}) => {
			state.tasks = typeof payload === "string" ? [] : payload
			state.load = false
		},
		[filterExecutorTask.rejected]: (state, {payload}) => {
			console.log("error during filter tasks")
			state.load = false
		},
		[getAllTasks.pending]: state => {
			state.load = true
		},
		[getAllTasks.fulfilled]: (state, action) => {
			state.load = false
			state.error = false
			state.successWork = true
			state.isSubmited = false
			state.tasks = action.payload.Tasks
		},
		[getAllTasks.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		//click on Tasks
		[clickOnTask.pending]: state => {
			state.loadBtn = true
		},
		[clickOnTask.fulfilled]: (state, {payload}) => {
			state.loadBtn = false
			state.error = false
			state.successWork =
				payload.message ===
				"Вы не можете подать заявку на эту работу, пока ваш статус пассивный."
					? false
					: true
			state.message =
				payload.message === "success" ? "Заявка принята" : payload.message
			// state.message = action.payload;
		},
		[clickOnTask.rejected]: (state, action) => {
			state.loadBtn = false
			state.error = true
			state.message = action.payload.message
		},
		[getResponseOrders.pending]: state => {
			state.load = true
		},
		[getResponseOrders.fulfilled]: (state, action) => {
			state.isSubmited = true
			state.load = false
			state.error = false
			state.successWork = true
			state.tasks = typeof action.payload === "string" ? [] : action.payload
		},
		[getResponseOrders.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		[getWorkOrders.pending]: state => {
			state.load = true
		},
		[getWorkOrders.fulfilled]: (state, action) => {
			state.load = false
			state.error = false
			state.isSubmited = true
			state.successWork = true
			state.tasks = typeof action.payload === "string" ? [] : action.payload
		},
		[getWorkOrders.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		[getCompletedOrders.pending]: state => {
			state.load = true
		},
		[getCompletedOrders.fulfilled]: (state, action) => {
			state.load = false
			state.error = false
			state.isSubmited = true
			state.successWork = true
			state.tasks = typeof action.payload === "string" ? [] : action.payload
		},
		[getCompletedOrders.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		[getOrdersNotSelected.pending]: state => {
			state.load = true
		},
		[getOrdersNotSelected.fulfilled]: (state, action) => {
			state.isSubmited = false
			state.error = false
			state.successWork = true
			state.tasks = typeof action.payload === "string" ? [] : action.payload
			state.load = false
		},
		[getOrdersNotSelected.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		[postFinshInWork.pending]: state => {
			state.load = true
		},
		[postFinshInWork.fulfilled]: (state, action) => {
			state.isSubmited = true
			state.error = false
			state.successWork = true
			state.tasks = action.payload
			state.load = false
		},
		[postFinshInWork.rejected]: (state, action) => {
			state.load = false
			state.error = true
		},
		[taskCountExecutor.pending]: state => {
			state.load = true
		},
		[taskCountExecutor.fulfilled]: (state, action) => {
			state.count = action.payload
			state.load = false
		},
		[taskCountExecutor.rejected]: state => {
			state.load = false
		},
		[getNotConfirmedEmployer.pending]: state => {
			state.load = true
		},
		[getNotConfirmedEmployer.fulfilled]: (state, {payload}) => {
			state.isSubmited = false
			state.error = false
			state.successWork = true
			state.tasks = payload
			state.load = false
		},
		[getNotConfirmedEmployer.rejected]: (state, {payload}) => {
			state.error = false
			state.load = false
		},
	},
})

export const {
	resetPartReducer,
	setIsSubmited,
	setTaskExecutorInitialState,
	resetMessage,
	setSuccess,
	rejectTask,
	setCount,
} = taskExecutorSlice.actions

export default taskExecutorSlice.reducer
