/*globals linphone */
linphone.core.enums = {

	registrationState : {
		None : 0,
		Progress : 1,
		Ok : 2,
		Cleared : 3,
		Failed : 4
	},
	getRegistrationStateText : function(value) {
		switch (value) {
		case linphone.core.enums.registrationState.None:
			return "None";
		case linphone.core.enums.registrationState.Progress:
			return "Progress";
		case linphone.core.enums.registrationState.Ok:
			return "Ok";
		case linphone.core.enums.registrationState.Cleared:
			return "Cleared";
		case linphone.core.enums.registrationState.Failed:
			return "Failed";
		default:
			return "?";
		}
	},

	globalState : {
		Off : 0,
		Startup : 1,
		On : 2,
		Shutdown : 3
	},
	getGlobalStateText : function(value) {
		switch (value) {
		case linphone.core.enums.globalState.Off:
			return "Off";
		case linphone.core.enums.globalState.Startup:
			return "Startup";
		case linphone.core.enums.globalState.On:
			return "On";
		case linphone.core.enums.globalState.Shutdown:
			return "Shutdown";
		default:
			return "?";
		}
	},

	callState : {
		Idle : 0,
		IncomingReceived : 1,
		OutgoingInit : 2,
		OutgoingProgress : 3,
		OutgoingRinging : 4,
		OutgoingEarlyMedia : 5,
		Connected : 6,
		StreamsRunning : 7,
		Pausing : 8,
		Paused : 9,
		Resuming : 10,
		Refered : 11,
		Error : 12,
		End : 13,
		PausedByRemote : 14,
		UpdatedByRemote : 15,
		IncomingEarlyMedia : 16,
		Updated : 17,
		Released : 18
	},
	getCallStateText : function(value) {
		switch (value) {
		case linphone.core.enums.callState.Idle:
			return "Idle";
		case linphone.core.enums.callState.IncomingReceived:
			return "IncomingReceived";
		case linphone.core.enums.callState.OutgoingInit:
			return "OutgoingInit";
		case linphone.core.enums.callState.OutgoingProgress:
			return "OutgoingProgress";
		case linphone.core.enums.callState.OutgoingRinging:
			return "OutgoingRinging";
		case linphone.core.enums.callState.OutgoingEarlyMedia:
			return "OutgoingEarlyMedia";
		case linphone.core.enums.callState.Connected:
			return "Connected";
		case linphone.core.enums.callState.StreamsRunning:
			return "StreamsRunning";
		case linphone.core.enums.callState.Pausing:
			return "Pausing";
		case linphone.core.enums.callState.Paused:
			return "Paused";
		case linphone.core.enums.callState.Resuming:
			return "Resuming";
		case linphone.core.enums.callState.Refered:
			return "Refered";
		case linphone.core.enums.callState.Error:
			return "Error";
		case linphone.core.enums.callState.End:
			return "End";
		case linphone.core.enums.callState.PausedByRemote:
			return "PausedByRemote";
		case linphone.core.enums.callState.UpdatedByRemote:
			return "UpdatedByRemote";
		case linphone.core.enums.callState.IncomingEarlyMedia:
			return "IncomingEarlyMedia";
		case linphone.core.enums.callState.Updated:
			return "Updated";
		case linphone.core.enums.callState.Released:
			return "Released";
		default:
			return "?";
		}
	}
};