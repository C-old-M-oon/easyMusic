var zh = {
	common: {
		query: '查询',
		reset: '重置',
		close: '关闭',
		confirm: '确定',
		ok: '确认',
		cancel: '取消',
		back: '返回',
		copy: '复制',
		modify: '修改',
		import: '导入',
		export: '导出',
		add: '增加',
		delete: '删除',
		refresh: '刷新',
		more: '更多',
		ipAddress: 'IP地址',
		operation: '操作',
		allEnable: '全部启用',
		allStopUse: '全部停用',
		enable: '启用',
		enabled: '已启用',
		notEnabled: '未启用',
		initiateVerify: '启动检查',
		tips: '提示',
		success: '成功',
		fail: '失败',
		delBtnNoticeTitle: '确认删除吗？',
		delBtnNoticeContent: '是否确认执行删除操作？本操作不可撤销。',
		downLoad:'下载',
		selectOne: '请选择一条记录',
		selectOneAtLeast: '请至少选择一条记录',
		valueRequired: '该值必须填写。',
		navigation_itemNoPaging: '共有{0}条记录。',
		valueCheck: '有效长度1~{0}，文件名不能以“.”开始和结束，且不能包含中文、全角字符、空格以及下列字符：\\/:*?"\'<>|。',
		netConfig: '网络自动化',
		all: '所有',
		addDevSuccess: '增加设备成功。',
		preStep: '上一步',
		nextStep: '下一步',
		finish: '完成',
		prompt: '查看详细信息',
	},
	// 导航
	leftNav: {
		compliance: {
			title: '合规管理',
			passwordConfig: '设备密码管理',
			operationAuditing: '设备操作审核',
			deviceConfig: '设备配置自动化',
			deviceRegexInspection: '设备合规巡检',
			regexTaskAdd: '增加检查任务',
			regexTaskEdit: '修改检查任务',
			inspectTaskHistory: '检查任务历史',
			deploymentStrategy : '部署策略',
			fixCommand : '修复命令',
			setTaskAttr : '设置任务属性',
			fixViolationDev: '修复违规设备',
			modifyInspectTask: '修改检查任务',
			copyInspectTask: '复制检查任务',
			createTask: '创建任务',
			modifyTask: '修改任务',
			viewTaskDetails: '查看任务详情',
			taskExecutionResults: '任务执行结果--任务真实',
			viewPasswordDetails: '查看密码详情',
			strategyList: '合规策略列表'
		},
		operatorLog: {
			title: '日志',
			proxyAgentLog: 'Telnet/SSH代理操作日志',
		}
	},
	/* 合规管理 */
	// 设备配置自动化
	deviceConfig: {
		taskStatus: '任务状态',
		executeFruit: '执行结果',
	},
	// 选择设备
	selectDevice: {
		status: '状态',
		deviceName: '设备名称',
		deviceLabel: '设备标签',
		ipAddress: 'IP地址',
		deviceType: '设备类型',
		deviceCategory: '设备系列',
		devSeriesName: '设备系列',
	},
	//perspective顶部菜单资源串
	icc_topmenu_titlestring_regex_task: '合规检查',
	icc_topmenu_titlestring_regex_grouplist: '合规策略',
	icc_topmenu_titlestring_regex_command: '回显命令片段',
	icc_topmenu_titlestring_autobackupplan: '自动备份计划',
	icc_topmenu_titlestring_backuphistory: '备份历史记录',
	icc_topmenu_titlestring_autodeployplan: '自动部署计划',
	icc_topmenu_titlestring_task: '部署任务',
	icc_topmenu_titlestring_batchTask: '批量部署任务',
	icc_topmenu_titlestring_confFileBase: '配置基线审计',
	icc_topmenu_titlestring_softwBase: '软件基线审计',
	icc_topmenu_titlestring_option: '选项',
	icc_topmenu_titlestring_cfgcompare: '通用配置文件比较',
	icc_topmenu_titlestring_vlan_device_management: 'VLAN设备管理',
	// 查看任务执行结果
	task_execResult_nav_execResult: '查看任务执行结果',
	task_execResult_tblTtl_result: '执行结果',
	task_execResult_tblTtl_status: '执行状态',
	task_taskList_colName_statusResult: '状态--执行结果',
	task_execResult_colName_deviceName: '设备名称',
	task_execResult_colName_deviceExecStartTime: '设备执行开始时间',
	task_execResult_colName_deviceExecEndTime: '设备执行结束时间',
	task_execResult_colName_deviceExecResult: '设备执行结果',
	task_execResult_execSucceed: '成功',
	task_execResult_execFail: '失败',
	task_execResult_execNA: '未知',
	task_execResult_timeout: '超时',
	task_execStatus_partSucceed: '部分成功',
	task_execStatus_waiting: '等待',
	task_execStatus_cancel: '取消',
	task_execStatus_running: '正在执行',
	task_execStatus_finish: '设备执行结束',
	task_execStatus_finish: '设备执行结束',
	// 配置模板列表页面
	confFileLib_confFileList_nav_confFileLib: '配置模板库',
	// 设备软件库模块
	devSoft_softList_title: '设备软件库',
	devSoft_importSoftware_tableTitle_chooseDev_header_checkedResult: '检查结果',
	// 设备配置软件一览表和设备配置管理
	devConfSoft_softList_btn_backupConfFile: '备份设备配置',
	devConfSoft_softList_btn_updateDevSoft: '部署设备软件',
	devConfSoft_softList_btn_restore: '恢复',
	devConfSoft_softList_btn_upload: '上传文件',
	devConfSoft_softList_link_viewBackupResult: '当前用户正在备份设备的配置文件，点击这里快速查看备份结果。',
	devConfSoft_softList_lbl_devName: '设备名称',
	devConfSoft_softList_colName_currSoftVersion: '当前软件版本',
	devConfSoft_softList_colName_latestCanUseVersion: '最新可用软件版本',
	devConfSoft_autoBakTime_btn_selectDev: '增加设备',
	devConfSoft_autoBakTime_drop_perDay: '每天',
	devConfSoft_autoBakTime_drop_perWeek: '每周',
	devConfSoft_autoBakTime_drop_perMonth: '每月',
	deploy_confFileSelDeploy_nav_selDeployDev: '选择部署设备',
	deploy_confFileSelDeploy_nav_fillConfParams: '配置参数',
	deploy_confFileSelDeploy_nav_setTaskAttribute: '设置任务属性',
	deploy_confFileSelDeploy_nav_abstract: '摘要',
	// 设置任务属性页面
	deploy_confFileSelDeploy_taskDesc: '配置文件：',
	deploy_confFileSelDeploy_taskName: '演练/灾备执行/恢复',
	// 配置备份历史
	devConfMng_confFileHis_colName_baseLineDevConf: '基线化设备配置',
	devConfMng_devInfor_lbl_Mon: '星期一',
	devConfMng_devInfor_lbl_Tues: '星期二',
	devConfMng_devInfor_lbl_Wed: '星期三',
	devConfMng_devInfor_lbl_Thurs: '星期四',
	devConfMng_devInfor_lbl_Fri: '星期五',
	devConfMng_devInfor_lbl_Sat: '星期六',
	devConfMng_devInfor_lbl_Sun: '星期日',
	devConfMng_devInfor_lbl_perDay: '{0}日',
	//icc设备配置相关资源串
	devSoft_confFileCopy_restoreDevConf: '恢复设备软件',
	devSoft_auditList_restoreDevSoftBase: '恢复设备软件至基线',
	devConf_confFileCopy_restoreDevConf: '恢复设备配置',
	devConf_auditList_restoreDevConfBase: '恢复设备配置至基线',
	//部署入口页面
	deploy_deployDevice_devsoftlist: '部署设备配置',
	deploy_deployDevice_devsoftlist_batch: '批量部署设备配置',
  	deploy_restore_dev_configuration: '恢复设备配置',
	deploy_restore_dev_conf_tofile: '恢复至',
	//选择配置文件页面
  	deploy_confFileSelDeploy_nav_deployDevConf: '部署设备配置',
	deploy_confile_deploy_devConfile: '设备必须选择配置文件。',
  	deploy_confFileSelDeploy_grpFrmTtl_selConfFile: '选择配置模板',
  	deploy_confFileSelDeploy_lbl_confFileFolder: '所属文件夹',
  	deploy_confFileSelDeploy_lbl_confFileName: '模板名称',
  	deploy_confFileSelDeploy_grpFrmTtl_selDeployDev: '选择部署设备',
  	deploy_confFileSelDeploy_btn_addDev: '增加设备',
  	deploy_confFileSelDeploy_btn_delAll: '全部删除',
	deploy_confFileSelDeploy_grpFrmTtl_deployStrategy: '部署策略',
	deploy_confFileSelDeploy_lbl_confFileType: '部署到设备的文件类型',
	deploy_confFileSelDeploy_lbl_backupStartup: '备份设备当前启动配置文件',
	deploy_confFileSelDeploy_lbl_rebootAfterDeploy: '部署完成后重新启动设备',
	deploy_confFileSelDeploy_lbl_stopDeployRunning: '因设备运行配置与网管备份的最新运行配置不一致而不执行',
	deploy_confFileSelDeploy_lbl_backupRunningBeforeDeploy: '下发命令前将设备运行配置备份到网管服务器',
	deploy_confFileSelDeploy_lbl_saveRunningBeforeDeploy: '下发命令前将设备运行配置保存为启动配置',
	deploy_confFileSelDeploy_lbl_backupRunningAfterDeploy: '下发命令后将设备运行配置备份到网管服务器',
	deploy_confFileSelDeploy_lbl_saveRunningAfterDeploy: '下发命令后将设备运行配置保存为启动配置',
	deploy_confFileSelDeploy_drop_running: '运行配置',
	deploy_confFileSelDeploy_drop_startup: '启动配置',
	deploy_confFileSelDeploy_confFiles_checkresult_showInfo: '检查结果：{0}台设备符合条件；{1}台设备不符合条件；{2}台设备检查结果未知。',
	deploy_confFileSelDeploy_selDeployDev: '请选择部署设备。',
	deploy_confFileSelDeploy_confFiles_adaptTemplate: '与配置模板适用设备型号不符。',
	deploy_confFileSelDeploy_confFiles_runcfg_noSupport: '不支持部署配置片段为运行配置。',
	deploy_confFileSelDeploy_confFiles_runcfg_noSupport_F: '不支持部署配置文件为运行配置。',
	deploy_confFileSelDeploy_confFiles_unknown: '未知。',
	//查看配置内容页面
	deploy_viewConfContent_winTtl_viewContent: '查看配置内容',
	//配置向导资源字符串
	deploy_confFile_colName_devName: '设备名称',
	deploy_confFile_colName_ipAddress: 'IP地址',
	deploy_confFile_colName_mask: '掩码',
	deploy_confFile_colName_devTypeName: '设备型号',
	deploy_confFileAbs_colName_devTypeName: '设备型号',
	deploy_softDevAbs_colName_devName: '设备名称',
	deploy_softDevAbs_colName_currentVersion: '当前软件运行版本',
	deploy_softDevAbs_colName_updateVersion: '部署软件版本',
	deploy_softDevAbs_colName_updateBootVer: '部署Boot ROM文件',
	deploy_softDevAbs_colName_devPath: '设备存放路径',
  	//补充配置参数页面
	deploy_confFileSelDeploy_tblTtl_fillParams: '请输入参数',
	deploy_confFileSelDeploy_tblTtl_fillConfParams: '配置参数',
	deploy_confFileSelDeploy_notice_text: '1、可以输入固定值，例如ip地址：10.24.56.78。<br> 2、可以输入MIB字段，符合<span style="color:red">$(mibName|mibVariable|index)</span>。<br>例如：$(H3C-SYS-MAN-MIB|h3cSysImageSize|65537)或者$(H3C-SYS-MAN-MIB|h3cSysImageSize|@(H3C-SYS-MAN-MIB|h3cSysReloadImage|65536))。<br>3、可以选择或者输入iMC动态参数的表达式，符合<span style="color:red">%&#60;moduleName.paramExpression&#62;</span>，<br>例如：%&#60;icc.transport.type&#62;。<br> 4、如果输入iMC动态参数表达式，则表达式的值实际与具体的配置设备相关联。',
	deploy_confFileSelDeploy_grpFrmTtl_pleasefillConfParams: '请输入参数',
	deploy_confFileSelDeploy_hrefSelect: '选择iMC参数',
	deploy_confFileSelDeploy_paramCheckError_mib: 'MIB参数输入格式错误。',
	//配置文件摘要页面
	deploy_confFileSelDeploy_tbTtl_abstract: '摘要',
	deploy_confFileSelDeploy_grpFrmTtl_taskAttribute: '任务属性',
  	deploy_confFileSelDeploy_grpFrmTtl_deployDevs: '部署设备',
	deploy_confFileSelDeploy_confFiles_checkPass: '检查通过。',
	//批量部署配置
	deploy_confFileSelDeploy_lbl_operator: '操作',
	deploy_confFileSelDeploy_nav_batchdeployDevConf: '批量部署设备配置',
	deploy_confFileSelDeploy_selConfFileTemplate: '请选择模板文件',
	deploy_confFileAbs_colName_confAndStrategy: '配置内容和部署策略',
	deploy_confFileAbs_colName_StrategyContent: '部署策略',
	deploy_confFileAbs_button_view_showConfContent: '查看配置内容',
	deploy_confFileAbs_button_view_showStrategyContent: '查看部署策略',
	icc_conf_file_set_device_template: '设置设备模板和部署策略',
	icc_conf_file_set_device_config_params: '配置参数',
	icc_conf_file_do_not_need_config_params: '所选设备中"{0}"，不需要配置参数的设备。',
	icc_conf_file_select_same_file_params: '批量部署设备配置参数，请选择配置文件相同的设备配置参数。',
	icc_other_device_noconffile_and_strategy: '设备“{0}”未配置模板文件策略。',
	endTimeGtStartTime: '结束时间必须晚于开始时间',
	deploy_confFileSelDeploy_validate_nameInfo: '有效长度1~32。<br>灾备任务名称规则：分行名称-演练/灾备执行/恢复-1-n<br>如：北京分行-演练执行-1-0',
	//自动备份计划资源串
	backup_autoPlanList_tip_autoPlan: '自动备份计划',
	backup_historyList_tip_history: '备份历史记录',
  	backup_historyList_validate_time: '输入格式：yyyy-mm-dd hh:mm:ss。',
  	backup_addAutoPlan_tip_frequency: '执行周期',
	backup_autoplan_selectDev: '选择设备',
	//自动部署项目
	icc_empty_device_deploy: '自动部署计划',
	// 配置模板库
	configurationTemplates: {
		configurationTemplates: '配置模板库',
		pleaseSelectCfgTemplate: '请选择配置模板。',
		cfgTemplateContentEmpty: '配置模板内容为空。',
	},
	universalJob: {
		moduleType1: '部署设备配置',
		moduleType2: '恢复设备配置',
		moduleType3: '备份设备软件',
		moduleType4: '部署设备软件',
		moduleType5: '从网管恢复设备软件',
		moduleType6: '从设备恢复设备软件',
		moduleType9: '通用配置任务',
		moduleType10: '通用轮询任务',
		moduleType15: '自动备份设备配置',
		moduleType16: '手工备份设备配置',
		moduleType17: '备份全网设备配置',
		moduleType18: '配置检查任务',
		moduleType33: '批量重启设备',
		moduleType34: '批量保存设备配置',
		moduleType35: '批量接口up/down配置',
		moduleType36: '批量配置PoE接口功率',
		moduleType37: '批量配置trap主机',
		moduleType38: '批量配置生成树全局参数',
		moduleType39: '批量配置STP接口参数',
		moduleType40: '批量配置聚合协议端口参数',
		moduleType41: 'iCC通用文件上传',
		moduleType42: 'OAP设备软件升级',
		moduleType43: 'VLAN批量配置',
		moduleType44: '自动部署模块部署设备软件',
		moduleType45: '自动部署模块部署设备配置',
		moduleType46: '自动部署模块备份设备配置',
		moduleType48: '设备通用配置引擎',
		moduleType49: '违规设备修复',
		moduleType51: '批量校验访问参数',
		moduleType55: 'Trap备份设备配置',
		moduleType61: 'SCC定时任务',
		moduleType62: '设备挂牌开始任务',
		moduleType63: '设备挂牌结束任务',
		moduleType66: 'BSO定时任务',
	},
	//ICC-设备软件库
	devSoftLib: {
		devSoftLib: '设备软件库',
	},
	//icc选项
	option_nav_iccOption: '选项',
	// 任务列表
	task_taskList_nav_taskList: '部署任务',
	task_default_taskName_prefix: '任务',
	task_taskList_tblTtl_start: '立即执行',
	task_taskList_tblTtl_enable: '启用',
	task_taskList_tblTtl_handup: '挂起',
	task_taskList_tblTtl_renew: '恢复',
	task_taskList_tblTtl_delete: '删除',
	task_taskList_tblTtl_refresh: '刷新',
	task_taskList_taskState_drop_all: '所有',
	task_taskList_taskState_drop_unExec: '未执行',
	task_taskList_taskState_drop_isExecuting: '正在执行',
	task_taskList_taskState_drop_isStopping: '正在停止',
	task_taskList_taskState_drop_stopped: '已停止',
	task_taskList_taskState_drop_finished: '完成',
	task_taskStatus_wait: '等待执行',
	task_taskStatus_executing: '正在执行',
	task_taskStatus_iSuspending: '正在挂起',
	task_taskStatus_iSuspend: '挂起',
	task_taskStatus_iExpired: '任务过期',
	task_taskStatus_approving: '待审核',
	task_taskStatus_approvReject: '审核不通过',
	task_taskStatus_approvdeleted: '审核流程被删除',
	task_taskStatus_waitapproving: '待提交审核',
	task_executeFruit_success: '成功',
	task_executeFruit_failure: '失败',
	task_executeFruit_partSuccess: '部分成功',
	task_executeFruit_unknown: '未完成',
	task_taskList_colName_taskSubType: '任务子类型',
	task_taskList_colName_createUser: '创建者',
	task_taskList_colName_lastExecTime: '上次开始时间',
	task_taskList_colName_nextExecTime: '下次开始时间',
	task_sureToRenewTask: '确认要恢复任务吗？',
	task_sureToStarTask: '确认要立即执行任务吗？',
	task_sureToHandUpTask: '确认要挂起任务吗？',
	// 任务属性
  	task_taskAttribute_lbl_taskName: '任务名称',
	task_taskAttribute_lbl_taskType: '任务类型',
	task_taskAttribute_lbl_scheduleType: '调度类型',
	task_taskAttribute_lbl_taskScheduleTime: '调度时间',
	task_taskAttribute_lbl_task_begin: '开始时间',
	task_taskAttribute_lbl_task_end: '结束时间',
	task_taskAttribute_lbl_task_exextime: '任务执行时间',
	task_taskAttribute_lbl_task_exextime: '任务执行时间',
	task_taskAttribute_lbl_taskScheduleSort: '调度顺序',
	task_taskAttribute_lbl_continue: '停止当前设备的部署',
	task_taskAttribute_lbl_stop: '停止所有其他设备的部署',
  	task_taskAttribute_lbl_taskDesc: '任务描述',
	task_taskAttribute_btn_sort: '设备排序',
	task_taskAttribute_schedultTime_repeat_page: '周期性',
	task_taskAttribute_schedultTime_drop_atOnce: '立即执行',
	task_taskAttribute_schedultTime_drop_Once: '定时执行',
	task_taskAttribute_schedultSort_drop_serial: '串行',
	task_taskAttribute_schedultSort_drop_parallel: '并行',
	task_time_execTimeMustLaterThanNow: '任务执行时间要晚于当前时间',
	// 查看任务详细信息
  	task_viewTask_lbl_onerror: '错误处理机制',
	task_job_detail_colName_detail: '详细步骤',
	confFileLib_confFileList_cli_task_result: 'CLI脚本执行过程',
	icc_deploy_success_improve: '查看配置变化',
	//周期性任务新增
	task_taskAttribute_schedultTime_once_page: '一次性',
  	//部署完成后增加配置比较
  	icc_deploy_cfg_compare: '查看部署前后的配置变化',
  	//合规资源串
  	regex_groupManage_validate_nameInfo: '有效长度1~32。',
  	//全网备份支持过滤设备
	icc_config_deploy_running_config_tip: '部署\\恢复设备运行配置依赖于目标设备对配置命令的支持能力。',
  	icc_config_deploy_running_config_tip_effective: '当部署或恢复启动配置时，只有重启设备后才会生效。',
  	//部署设备配置：配置参数tab页
	cfg_deploy_configCfgParamTab_columnName_variableName: '变量名称',
	cfg_deploy_configCfgParamTab_columnName_variableValue: '变量值',
	cfg_deploy_configCfgParamTab_columnName_variableType: '变量类型',
	cfg_deploy_configCfgParamTab_variableType_value: '值变量',
	cfg_deploy_configCfgParamTab_variableType_template: '配置模板变量',
	// gateone
	gateoneCfg: {
		device: {
			deviceip_label: '搜索设备IP、标签',
			staticAuth: 'Telnet/SSH代理（静态）',
			manualThirdPartyAuth: 'Telnet/SSH代理（半动）',
			pureStaticAuth: 'Telnet/SSH代理（纯静态）',
		}
	},
	// Telnet/SSH代理操作日志
	proxyAgentLog: {
		list: {
			creator: '操作员',
			workOrderNumber: '变更单号',
			typeStr: '登录类型',
			ip: '设备IP',
			deviceName: '设备名称',
			cmd: '命令',
			operTimeAsString: '开始时间',
			endTimeAsString: '结束时间',
			operatorResult: '操作结果',
			cmdResult: '命令（操作结果）',
			dataTime: '数据获取时间:'
		},
		details: {
			title: '查看日志详细信息',
			description: '操作描述',
			operTimeAsString: '操作时间',
		}
	},
	// 系统参数配置
	sysparameter: {
		telnetsshcfg: {
			title: 'Telnet/SSH代理服务器配置',
			isEnable: '启用',
			ip: 'Telnet/SSH代理服务器IP地址',
			port: 'Telnet/SSH代理服务器端口',
			success: 'Telnet/SSH代理服务器配置成功。',
			notice: '代理服务器IP地址和端口必须同时填写或同时为空。'
		}
	},
	// 设备合规巡检
	devRegexTask: {
		taskStatus: '状态',
		taskName: '任务名称',
		inspectTaskName: '检查任务名称',
		dispathType: '调度类型',
		createTime: '创建时间',
		operation: '操作',
		examinationResult: '检查结果',
		implementResult: '执行结果',
		repair: '修复',
		edit: '修改',
		copy: '复制',
		explain: '说明',
		history: '历史',
		devTag: '设备标签',
		IPAddress: 'IP地址',
		devModel: '设备型号',
		devsource: '设备来源',
		delete: '删除',
		taskAttr: '任务属性',
		strategyList: '合规策略列表',
		selectDev: '选择设备或设备型号',
		filterDev: '过滤的设备',
		tip1: '有效长度为1~32个字符，且不能字符：\/:*?"',
		tip2: '1、检查任务对合规策略进行检查的时候，自动过滤掉不符合检查要求的设备，检查结果只对检查的设备进行统计。',
		tip3: '2、若选择的合规策略中包含对当前启动/运行配置进行检查的规则，为了确保对设备的检查能够执行成功，请先对待检查设备的启动/运行配置进行备份。',
		tip4: '本列表中的策略是执行的。',
		tip5: '有效长度0~128。',
		tip6: '不发送合规任务结果报告',
		tip7: '未通过时发送合规任务结果报告',
		tip8: '发送合规任务结果报告',
		tip9: '文件名不能以字符“.”开始或结尾，不能包含中文、全角字符、空格以及下列字符：\/:*?"<>|。',
		tip10: '有效长度1~32。',
		tip11: '输入要检索的字符串，支持以“${}”表示的动态参数，例如：输入“port trunk permit vlan ${vlan_id}”。',
		tip12: '输入格式：hh:mm:ss',
		tip13: '不选设备型号默认代表全部设备。',
		levelAll: '全部',
		level1: '通知以上',
		level2: '警告以上',
		level3: '次要以上',
		level4: '重要以上',
		dispatchType1: '立即执行',
		dispatchType2: '定期执行',
		name: '名称',
		describe: '描述',
		enableYesOrNo: '是否启用',
		type: '类型',
		fixViolationDevStep1: '违背规则概览',
		fixViolationDevStep2: '修复命令',
		fixViolationDevStep3: '设置任务属性',
		startTimeRange: '开始时间范围',
		executeFruit: '执行结果',
		cueTow: '输入格式：yyyy-mm-dd hh:mm:ss',
		strategyView: '任务检查结果(策略视图)',
		complianceStrategySource: '合规策略检查结果',
		devView: '任务检查结果(设备视图)',
		exportSource: '导出任务检查结果',
		inpsectHistory: '检查任务历史',
		checkImplementReport: '查看执行报告',
		checkExtractReport: '查看执行报告',
		taskName: '任务名称',
		createUser: '创建者',
		complianceDev: '合规设备',
		violationDev: '违规设备',
		violationTotal: '违规总计',
		taskDescribe: '任务描述',
		screening: '合规筛查结果',
		devViolationSource: '设备违规结果',
		echoDisplayCommand: '回显命令片段',
		addEchoDisplayCommand: '增加回显命令片段',
		editEchoDisplayCommand: '修改回显命令片段',
		copyEchoDisplayCommand: '复制回显命令片段',
		detailEchoDisplayCommand: '详情信息',
		complianceStrategy: '合规策略',
		addComplianceStrategy: '增加合规策略',
		editComplianceStrategy: '修改合规策略',
		copyComplianceStrategy: '复制合规策略',
		violationLevel: '违规级别',
		checkType: '检查类型',
		test: '测试',
		complianceStrategyList: '合规策略列表',
		addRules: '增加规则',
		upload: '选择导入文件'
	},
	// 设备密码管理
	passwordCfg: {
		pwdList: {
			taskName: '任务名称',
			taskStatus: '任务状态',
			taskType: '任务类型',
			pwdtyp: '设置密码',
			configIf: '配置接口',
			mailMind: '邮件提醒',
			mailNotice: '邮件通知',
			createUser: '创建者',
			createTime: '创建日期',
			executeFruit: '执行结果',
			msgPrompt: '至少选择一个任务。',
			taskResult: '状态--执行结果',
			executeTime: '执行时间',
		},
		addTaskList: {
			taskName: '任务名称',
			userName: '用户名',
			setPassword: '设置密码',
			randomPassword: '随机密码',
			appointPassword: '指定密码',
			configInterface: '配置接口',
			passwordLength: '密码长度',
			complexity: '复杂度',
			taskType: '任务类型',
			executeTime: '执行时间',
			executeImmediately: '立即执行',
			mailRemind: '邮件提醒',
			mailNotice: '邮件通知',
			mailPath: '邮件地址',
			password: '密码',
			addEquipment: '增加设备',
			deleteAll: '删除所有',
			equipmentName: '设备名称',
			ipPath: 'IP地址',
			equipmentType: '设备型号',
			cueOne: '有效长度1-32。',
			cueTow: '输入格式：yyyy-mm-dd hh:mm:ss',
			cueThree: '有效长度1~63且必须为数字+字母+特殊字符， 特殊字符包括：~ ` ! @ # $ % ^ & * ( ) = + | \' - _ [ ] { } : ; " , / . < > ? ',
			startTime: '开始时间',
			endTime: '结束时间',
			cycle: '周期',
			month: '月',
			everyOther: '每隔',
			requiredValue: '该值必须填写。',
			runTimeVerification: '任务执行时间要晚于当前时间。',
			cycleTimeVerification: '结束时间必须晚于开始时间。',
			mailRequiredValue: '邮箱地址不能为空！',
			emailRemindValue: '邮件提醒时间不能小于当前时间，请更改执行时间或开始时间！',
		},
		pwdDetailsList: {
			devIp: '设备IP',
			devName: '设备名称',
			username: '用户名',
			configIf: '配置接口',
			opassword: '原密码',
			mpassword: '要修改的密码',
			nowPassword: '现在密码',
			resultcode: '修改结果',
			result: '结果详细信息',
			operationTips: '请点击下面的链接下载文件。',
			pwdDownload: '密码csv文件下载',
		}
	},
	// 设备操作审核
	operationAuditing: {
		operationList: {
			adminName: '操作员',
			ipPath: 'IP地址',
			moduleName: '模块名称',
			equipmentIp: '设备IP',
			loginMode: '登录方式',
			startTime: '开始时间',
			endTime: '结束时间',
			order: '命令',
			performanceFruit: '执行结果',
			startTimeOne: '开始时间(从)',
			startTimeTwo: '开始时间(到)',
			endTimeOne: '结束时间(从)',
			endTimeTwo: '结束时间(到)',
			promptMessageStart: '开始时间（到）必须晚于或等于开始时间（从）。',
			promptMessageEnd: '结束时间（到）必须晚于或等于结束时间（从）。',
			more: '更多',
		},
	},

};
var en = {
	common: {
		query: 'Query',
		reset: 'Reset',
		close: 'Close',
		confirm: 'Confirm',
		ok: 'OK',
		cancel: 'Cancel',
		back: 'Back',
		copy: 'Copy',
		modify: 'Modify',
		export: 'Export',
		add: 'Add',
		delete: 'Delete',
		refresh: 'Refresh',
		more: 'More',
		ipAddress: 'IP Address',
		operation: 'Operation',
		enabled: '已启用',
		notEnabled: '未启用',
		tips: '提示',
		success: '成功',
		fail: '失败',
		delBtnNoticeTitle: '确认删除吗？',
		delBtnNoticeContent: '是否确认执行删除操作？本操作不可撤销。',
    	selectOne: '请选择一条记录',
		selectOneAtLeast: '请至少选择一条记录',
		valueRequired: '该值必须填写。',
		navigation_itemNoPaging: '{0} items in total.',
		valueCheck: 'The value is a string of 1 to {0} characters, which cannot start or end with a dot (.), and cannot include spaces or any of the following characters:\ / : * ? " \' < > |.',
		netConfig: '网络自动化',
		all: 'All',
		addDevSuccess: '增加设备成功。',
		prompt: '查看详细信息',
	},
	// 导航
	leftNav: {
		compliance: {
			title: '合规管理',
			passwordConfig: '设备密码管理',
			operationAuditing: '设备操作审核'
		},
		operatorLog: {
			title: '日志',
			telnetSSHLog: '代理操作日志',
		}
	},
	// 选择设备
	selectDevice: {
		status: 'Status',
		deviceName: 'Device Name',
		deviceLabel: 'Device Label',
		ipAddress: 'IP Address',
		deviceType: 'Device Type',
		deviceCategory: 'Device Category',
		devSeriesName: 'Device Series Name',
	},
	// 查看任务执行结果
	task_execResult_nav_execResult: 'View Execution Result',
	task_execResult_tblTtl_result: 'Operation Result',
	task_execResult_tblTtl_status: 'Execution Status',
	task_taskList_colName_statusResult: 'Status--Operation Result',
	task_execResult_colName_deviceName: 'Device Name',
	task_execResult_colName_deviceExecStartTime: 'Start Time on Device',
	task_execResult_colName_deviceExecEndTime: 'End Time on Device',
	task_execResult_colName_deviceExecResult: 'Execution Result on Device',
	task_execResult_execSucceed: 'Succeeded',
	task_execResult_execFail: 'Failed',
	task_execResult_execNA: 'Unknown',
	task_execResult_timeout: 'Timeout',
	task_execStatus_partSucceed: 'Partially succeeded',
	task_execStatus_waiting: 'Waiting',
	task_execStatus_cancel: 'Canceled',
	task_execStatus_running: 'Running',
	task_execStatus_finish: 'Task Finished',
	// 配置模板列表页面
	confFileLib_confFileList_nav_confFileLib: 'Configuration Templates',
	// 任务属性
  	task_taskAttribute_lbl_taskName: 'Task Name',
	task_taskAttribute_lbl_taskType: 'Task Type',
	task_taskAttribute_lbl_scheduleType: 'Schedule Type',
	task_taskAttribute_lbl_taskScheduleTime: 'Schedule Time',
	task_taskAttribute_lbl_task_begin: 'Start Time',
	task_taskAttribute_lbl_task_end: 'End Time',
	task_taskAttribute_lbl_task_exextime: 'Execution Time',
	task_taskAttribute_lbl_task_exextime: 'Execution Time',
	task_taskAttribute_lbl_taskScheduleSort: 'Schedule Sequence',
	task_taskAttribute_lbl_continue: 'Stop Deployment on the Current Device',
	task_taskAttribute_lbl_stop: 'Stop Deployments on All Devices',
  	task_taskAttribute_lbl_taskDesc: 'Task Description',
	task_taskAttribute_btn_sort: 'Sort',
	task_taskAttribute_schedultTime_repeat_page: 'Cycle',
	task_taskAttribute_schedultTime_drop_atOnce: 'Immediately',
	task_taskAttribute_schedultTime_drop_Once: 'Scheduled',
	task_taskAttribute_schedultSort_drop_serial: 'Sequential',
	task_taskAttribute_schedultSort_drop_parallel: 'Concurrent',
	task_time_execTimeMustLaterThanNow: 'Execution time should be later than the current time.',
	// 任务列表
	task_default_taskName_prefix: 'Task',
	task_taskList_tblTtl_start: 'Execute',
	task_taskList_tblTtl_enable: 'Enable',
	task_taskList_tblTtl_handup: 'Suspend',
	task_taskList_tblTtl_renew: 'Resume',
	task_taskList_tblTtl_delete: 'Delete',
	task_taskList_tblTtl_refresh: 'Refresh',
	task_taskList_taskState_drop_all: 'All',
	task_taskList_taskState_drop_unExec: 'Unexecuted',
	task_taskList_taskState_drop_isExecuting: 'Running',
	task_taskList_taskState_drop_isStopping: 'Stopping',
	task_taskList_taskState_drop_stopped: 'Stopped',
	task_taskList_taskState_drop_finished: 'Finished',
	task_taskList_colName_taskSubType: 'Task Sub Type',
	task_taskList_colName_createUser: 'Creator',
	task_taskList_colName_lastExecTime: 'Last Begin Time',
	task_taskList_colName_nextExecTime: 'Next Begin Time',
	task_sureToRenewTask: 'Are you sure you want to resume?',
	task_sureToHandUpTask: 'Are you sure you want to suspend?',
	//周期性任务新增
	task_taskAttribute_schedultTime_once_page: 'Once',
	// 查看任务详细信息
  	task_viewTask_lbl_onerror: 'Error Handling',
	task_job_detail_colName_detail: 'Details',
	confFileLib_confFileList_cli_task_result: 'CLI Script Running Process',
	icc_deploy_success_improve: 'View Change',
	// 设备配置软件一览表和设备配置管理
	devConfSoft_autoBakTime_drop_perDay: 'Every Day',
	devConfSoft_autoBakTime_drop_perWeek: 'Every Week',
	devConfSoft_autoBakTime_drop_perMonth: 'Every Month',
	devConfSoft_autoBakTime_btn_selectDev: 'Select Device',
	devConfMng_devInfor_lbl_Mon: 'Monday',
	devConfMng_devInfor_lbl_Tues: 'Tuesday',
	devConfMng_devInfor_lbl_Wed: 'Wednesday',
	devConfMng_devInfor_lbl_Thurs: 'Thursday',
	devConfMng_devInfor_lbl_Fri: 'Friday',
	devConfMng_devInfor_lbl_Sat: 'Saturday',
	devConfMng_devInfor_lbl_Sun: 'Sunday',
	// 设置任务属性页面
  	deploy_confFileSelDeploy_taskDesc: 'Configuration File: ',
	deploy_confFileSelDeploy_taskName: '演练/灾备执行/恢复',
	//选择配置文件页面
  	deploy_confFileSelDeploy_nav_deployDevConf: 'Deploy Device Configuration',
  	deploy_confFileSelDeploy_grpFrmTtl_selConfFile: 'Select Configuration Template',
  	deploy_confFileSelDeploy_lbl_confFileFolder: 'Folder',
  	deploy_confFileSelDeploy_lbl_confFileName: 'Template Name',
  	deploy_confFileSelDeploy_grpFrmTtl_selDeployDev: 'Select Device for Update',
	deploy_confFileSelDeploy_btn_addDev: 'Select Device',
	deploy_confFileSelDeploy_btn_delAll: 'Delete All',
	deploy_confFileSelDeploy_grpFrmTtl_deployStrategy: 'Deploy Strategy',
	deploy_confFileSelDeploy_lbl_confFileType: 'File Type to be Deployed',
	deploy_confFileSelDeploy_lbl_backupStartup: 'Backup the current startup configuration file of the device.',
	deploy_confFileSelDeploy_lbl_rebootAfterDeploy: 'Restart device after deployment.',
	deploy_confFileSelDeploy_lbl_stopDeployRunning: 'Deployment stopped. The configuration running on the device is not consistent with the latest running configuration backed up by system.',
	deploy_confFileSelDeploy_lbl_backupRunningBeforeDeploy: "Before deployment, back up the device's running configuration to system.",
	deploy_confFileSelDeploy_lbl_saveRunningBeforeDeploy: "Before deployment, save the device's running configuration as a startup configuration.",
	deploy_confFileSelDeploy_lbl_backupRunningAfterDeploy: "After deployment, back up the device's running configuration to system.",
	deploy_confFileSelDeploy_lbl_saveRunningAfterDeploy: "After deployment, save the device's running configuration as a startup configuration.",
	deploy_confFileSelDeploy_drop_running: 'Running Configuration',
	deploy_confFileSelDeploy_drop_startup: 'Startup Configuration',
  	deploy_confFileSelDeploy_confFiles_checkresult_showInfo: 'Check device compliance. Compliant: {0}, incompliant: {1}, unknown: {2}.',
	deploy_confFileSelDeploy_selDeployDev: 'Please select devices.',
	deploy_confFileSelDeploy_confFiles_adaptTemplate: "Don't match the configuration template.",
	deploy_confFileSelDeploy_confFiles_runcfg_noSupport: "Don't support deploying configuration segments as the running configuration.",
	deploy_confFileSelDeploy_confFiles_runcfg_noSupport_F: "Don't support deploying configuration file as the running configuration.",
	deploy_confFileSelDeploy_confFiles_unknown: 'unknown.',
	//配置文件摘要页面
	deploy_confFileSelDeploy_tbTtl_abstract: 'Abstract',
	deploy_confFileSelDeploy_grpFrmTtl_taskAttribute: 'Task Attributes',
  	deploy_confFileSelDeploy_grpFrmTtl_deployDevs: 'Deploy Device',
  	//配置向导资源字符串
	deploy_confFile_colName_devName: 'Device Name',
	deploy_confFile_colName_ipAddress: 'IP Address',
	deploy_confFile_colName_mask: 'Mask',
	deploy_confFile_colName_devTypeName: 'Device Model',
	deploy_softDevAbs_colName_devName: 'Device Name',
	deploy_softDevAbs_colName_currentVersion: 'Current Version',
	deploy_softDevAbs_colName_updateVersion: 'Update Version',
	deploy_softDevAbs_colName_updateBootVer: 'Update Boot ROM',
	deploy_softDevAbs_colName_devPath: 'Save Directory on Device',
	// 配置备份历史
	devConfMng_devInfor_lbl_perDay: '{0} day',
	// 部署入口页面
	deploy_restore_dev_conf_tofile: 'Restore configuration from',
	//批量部署配置
	deploy_confFileSelDeploy_lbl_operator: 'Operation',
	deploy_confFileSelDeploy_nav_batchdeployDevConf: 'Batch Deploy Device Configuration',
	deploy_confFileSelDeploy_confFiles_checkPass: 'Check Passed.',
	deploy_confFileSelDeploy_selConfFileTemplate: 'Please select Configuration file',
	deploy_confFileAbs_colName_confAndStrategy: 'Configuration And Deploy Strategy',
	deploy_confFileAbs_colName_StrategyContent: 'Deploy Strategy',
	deploy_confFileAbs_button_view_showConfContent: 'View Configuration Content',
	deploy_confFileAbs_button_view_showStrategyContent: 'View Deploy Strategy',
	icc_other_device_noconffile_and_strategy: 'Device "{0}" has no configuration file and deploy strategy.',
	icc_conf_file_set_device_template: 'Set device template and deploy strategy',
	icc_conf_file_set_device_config_params: 'Config Params',
	icc_conf_file_do_not_need_config_params: 'Device "{0}",does not need config paramseters.',
	icc_conf_file_select_same_file_params: 'Batch deploy config params,please select devices that the configuration file is same.',
	endTimeGtStartTime: '结束时间必须晚于开始时间',
	deploy_confFileSelDeploy_validate_nameInfo: '有效长度1~32。<br>灾备任务名称规则：分行名称-演练/灾备执行/恢复-1-n<br>如：北京分行-演练执行-1-0',
	//补充配置参数页面
	deploy_confFileSelDeploy_tblTtl_fillParams: '请输入参数',
	deploy_confFileSelDeploy_tblTtl_fillConfParams: 'Configuration Parameters',
	deploy_confFileSelDeploy_notice_text: '1.Input value, for example: IP address:10.24.56.78.<br> 2.Input MIB parameter, according with <span style="color:red">$(mibName|mibVariable|index)</span>.<br>For example: $(H3C-SYS-MAN-MIB|h3cSysImageSize|65537) or $(H3C-SYS-MAN-MIB|h3cSysImageSize|@(H3C-SYS-MAN-MIB|h3cSysReloadImage|65536)). <br>3. Input or select system parameter expression, according with <span style="color:red">%&#60;moduleName.paramExpression&#62;</span>,<br>For example: %&#60;icc.transport.type&#62;. <br> 4、If input system parameter expression, the factual value of expression is related with the material configure equipment.',
	deploy_confFileSelDeploy_grpFrmTtl_pleasefillConfParams: 'Please input parameter',
	deploy_confFileSelDeploy_hrefSelect: 'Select System Parameter',
	deploy_confFileSelDeploy_paramCheckError_mib: 'The value of the MIB parameter is invalid.',
	//查看配置内容页面
	deploy_viewConfContent_winTtl_viewContent: 'View Configuration Content',
	// 设备软件库模块
  	devSoft_importSoftware_tableTitle_chooseDev_header_checkedResult: 'Check Result',
	//自动备份计划资源串
  	backup_historyList_validate_time: 'Input format:yyyy-mm-dd hh:mm:ss.',
  	backup_addAutoPlan_tip_frequency: 'Operation Frequency',
	backup_autoplan_selectDev: 'Select Device',
  	//合规资源串
  	regex_groupManage_validate_nameInfo: 'Valid length: 1 to 32.',
	//部署完成后增加配置比较
	icc_deploy_cfg_compare: 'View the change before and after deployment',
	//全网备份支持过滤设备
  	icc_config_deploy_running_config_tip: "Deploying and restoring the runtime configuration of a device depend on the device's supportfor the configuration commands.",
  	icc_config_deploy_running_config_tip_effective: 'After you deploy or restore the startup configuration, you must restart the device to make the configuration take effect.',
  	//部署设备配置：配置参数tab页
	cfg_deploy_configCfgParamTab_columnName_variableName: 'Variable Name',
	cfg_deploy_configCfgParamTab_columnName_variableValue: 'Variable Value',
	cfg_deploy_configCfgParamTab_columnName_variableType: 'Variable Type',
	cfg_deploy_configCfgParamTab_variableType_value: 'Value Variable',
	cfg_deploy_configCfgParamTab_variableType_template: 'Configuration Template Variable',
	universalJob: {
		moduleType1: 'Deploy Device Configuration',
		moduleType2: 'Restore Device Configuration',
		moduleType3: 'Backup Device Software',
		moduleType4: 'Deploy Device Software',
		moduleType5: 'Restore Device Software from NMS',
		moduleType6: 'Restore Device Software from Device',
		moduleType9: 'General Configuration Task',
		moduleType10: 'General Polling Task',
		moduleType15: 'Automatic Backup Device Configuration ',
		moduleType16: 'Manual Backup Device Configuration',
		moduleType17: 'Backup Entire Network Device Configuration',
		moduleType18: 'Device Configuration examination Task',
		moduleType33: 'Batch Reboot Devices',
		moduleType34: 'Batch Save Device Configuration',
		moduleType35: 'Batch Status Configuration of Interfaces',
		moduleType36: 'Batch PoE Power Configuration of Interfaces',
		moduleType37: 'Batch Trap Host Configuration',
		moduleType38: 'Batch STP Global Parameters Configration',
		moduleType39: 'Batch STP Port Parameters Configration',
		moduleType40: 'Batch LACP Port Parameters Configration',
		moduleType41: 'iCC General File Upload',
		moduleType42: 'Deploy OAP Device Software',
		moduleType43: 'VLAN Batch Deploy',
		moduleType44: 'Deploy software by auto deployment module',
		moduleType45: 'Deploy configuration by auto deployment module',
		moduleType46: 'Backup configuration by auto deployment module',
		moduleType48: 'Device generic config engine',
		moduleType49: 'Fix Violating Devices',
		moduleType51: 'Batch Verify Device Parameters Configration',
		moduleType55: 'Trap Backup Device Configuration',
		moduleType61: 'SCC Period Task',
		moduleType62: 'Device Hold Stats Begin Task',
		moduleType63: 'Device Hold Stats End Task',
		moduleType66: 'BSO Period Task',
	},
	// 配置模板库
	configurationTemplates: {
		configurationTemplates: 'Configuration Templates',
		pleaseSelectCfgTemplate: 'Please select configuration template.',
		cfgTemplateContentEmpty: 'The configuration template content is empty.',
	},
	// gateone
	gateoneCfg: {
		device: {
			deviceip_label: '搜索设备IP、标签'
		}
	},
	// Telnet/SSH代理操作日志
	proxyAgentLog: {
		list: {
			creator: '操作员',
			workOrderNumber: '变更单号',
			typeStr: '登录类型',
			ip: '设备IP',
			deviceName: '设备名称',
			cmd: '命令',
			operTimeAsString: '开始时间',
			endTimeAsString: '结束时间',
			operatorResult: '操作结果',
			cmdResult: '命令（操作结果）',
			dataTime: '数据获取时间:'
		},
		details: {
			title: "查看日志详细信息",
			description: "操作描述",
		}
	},
	// 系统参数配置
	sysparameter: {
		telnetsshcfg: {
			title: 'Telnet/SSH代理服务器配置',
			isEnable: '启用',
			ip: 'Telnet/SSH代理服务器IP地址',
			port: 'Telnet/SSH代理服务器端口',
			success: 'Telnet/SSH代理服务器配置成功。',
			notice: '代理服务器IP地址和端口必须同时填写或同时为空。'
		}
	},
	/* 合规管理 */
	// 设备配置自动化
	deviceConfig: {
		taskStatus: 'task status',
		executeFruit: '执行结果',
	},
	// 设备密码管理
	passwordCfg: {
		pwdList: {
			taskName: 'task name',
			taskStatus: 'task status',
			taskType: 'task type',
			pwdtyp: 'password type',
			configIf: 'config',
			mailMind: 'mail mind',
			mailNotice: 'mail notice',
			createUser: 'creator',
			createTime: 'create time',
			executeFruit: 'execute fruit'
		},
	},
	// 设备操作审核
	operationAuditing: {
		operationList: {
			adminName: 'admin name',
			ipPath: 'ip path',
			moduleName: 'module name',
			equipmentIp: 'equipment ip',
			loginMode: 'login mode',
			startTime: 'start time',
			endTime: 'end time',
			order: 'order',
			performanceFruit: 'performance fruit',
			startTimeOne: 'start time (from)',
			startTimeTwo: 'start time (to)',
			endTimeOne: 'end time (from)',
			endTimeTwo: 'end time (to)',
			promptMessageStart: 'Start time (to) must be later than or equal to start time (from)',
			promptMessageEnd: 'End time (to) must be later than or equal to end time (from)',
			more: 'more',
		}
	},
};

export const messages = {
    zh,
    en
}