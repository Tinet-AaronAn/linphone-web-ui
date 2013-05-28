/*
 Linphone Web - Web plugin of Linphone an audio/video SIP phone
 Copyright (C) 2012  Yann Diorcet <yann.diorcet@linphone.org>

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

/*globals linphone*/

linphone.ui.i18n = {
	base : {
		error : {
			text : {
				en_US : 'An error occurs !',
				fr_FR : 'Une erreur s\'est produite !'
			},
			reload : {
				en_US : 'Reload',
				fr_FR : 'Recharger'
			}
		},
		install : {
			text : {
				download : { // No automatic plugin intallation
					en_US : 'The plugin is not installed. Please download it using the following button.',
					fr_FR : 'Le plugin n\'est pas installé. Veuillez le télécharger en utilisant le bouton suivant.'
				},
				auto : { // Automatic plugin installation
					en_US : 'The plugin is not installed. Please wait and accept the automatic install of the plugin.',
					fr_FR : 'Le plugin n\'est pas installé. Veuillez attendre et accepter l\'installation automatique du plugin.'
				},
				auto_or_update : { // With IE, we can not detect the current version without issue (javascript caching)
					en_US : 'The plugin is not installed or updated. Please wait and accept the automatic install of the plugin.',
					fr_FR : 'Le plugin n\'est pas installé ou pas à jour. Veuillez attendre et accepter l\'installation automatique du plugin.'
				},
				outdated_download : { // No automatic plugin update
					en_US : 'The plugin is outdated. Please download it using the following button.',
					fr_FR : 'Le plugin n\'est pas à jour. Veuillez accepter l\'installation automatique du plugin.'
				},
				outdated_auto : { // Automatic plugin update
					en_US : 'The plugin is outdated. Please wait and accept the automatic install of the plugin.',
					fr_FR : 'Le plugin n\'est pas à jour. Veuillez attendre et accepter l\'installation automatique du plugin.'
				}
			},
			unavailable : {
				en_US : 'Your operating system or your browser is not supported.',
				fr_FR : 'Votre système d\'exploitation ou votre navigateur n\'est pas supporté.'
			},
			reload : {
				en_US : 'Reload',
				fr_FR : 'Recharger'
			},
			download : {
				en_US : 'Download plugin',
				fr_FR : 'Télécharger le plugin'
			}
		}
	},
	errors : {
		core : {
			1 : {
				en_US : 'Invalid version of Linphone',
				fr_FR : 'Version invalide de Linphone'
			},
			2 : {
				en_US : 'Another instance of Linphone JS is started. Close it',
				fr_FR : 'Une autre instance de de Linphone JS est démarré. Veuillez fermer celle-ci.'
			}
		}
	},
	globalstatetext : {
		On : {
			en_US : 'On',
			fr_FR : 'Marche'
		}
	},
	menu : {
		settings : {
			about : {
				en_US : 'About',
				fr_FR : 'À Propos'
			},
			accounts : {
				en_US : 'Accounts',
				fr_FR : 'Comptes'
			},
			media : {
				en_US : 'Media',
				fr_FR : 'Média'
			},
			codecs : {
				en_US : 'Codecs',
				fr_FR : 'Codecs'
			},
			locales : {
				en_US : 'Language',
				fr_FR : 'Langue'
			},
			video : {
				en_US : 'Video',
				fr_FR : 'Vidéo',

				enable : {
					en_US : 'Enable',
					fr_FR : 'Activer'
				},
				self : {
					en_US : 'Self-view',
					fr_FR : 'Se voir'
				}
			},
			network : {
				en_US : 'Network',
				fr_FR : 'Réseau'
			}
		}
	},
	dialogs : {
		account : {
			title : {
				en_US : 'Add a Account',
				fr_FR : 'Ajouter un compte'
			},
			identity : {
				en_US : 'SIP identity',
				fr_FR : 'Identité SIP'
			},
			proxy : {
				en_US : 'SIP proxy address',
				fr_FR : 'Adresse du proxy SIP'
			},
			route : {
				en_US : 'Route(optional)',
				fr_FR : 'Route(optionnelle)'
			},
			expires : {
				en_US : 'Registration duration',
				fr_FR : 'Durée de l\'enregistrement'
			},
			register : {
				en_US : 'Register',
				fr_FR : 'Enregistrement'
			},
			remove : {
				en_US : 'Remove',
				fr_FR : 'Supprimer'
			},
			valid : {
				en_US : 'Valid',
				fr_FR : 'Valider'
			},
			errors : {
				title : {
					en_US : 'Error',
					fr_FR : 'Erreur'
				},
				message : {
					en_US : 'The following error(s) occured: ',
					fr_FR : 'Les erreurs suivantes sont survenues: '
				}
			}
		},
		auth : {
			title : {
				en_US : 'Authentication',
				fr_FR : 'Authentification'
			},
			username : {
				en_US : 'Username',
				fr_FR : 'Utilisateur'
			},
			password : {
				en_US : 'Password',
				fr_FR : 'Mot de passe'
			},
			cancel : {
				en_US : 'Cancel',
				fr_FR : 'Annuler'
			},
			valid : {
				en_US : 'Valid',
				fr_FR : 'Valider'
			}
		}
	},
	options : {
		accounts : {
			title : {
				en_US : 'Accounts',
				fr_FR : 'Comptes'
			},
			add : {
				en_US : 'Add',
				fr_FR : 'Ajouter'
			},
			name : {
				en_US : 'Name',
				fr_FR : 'Nom'
			},
			status : {
				en_US : 'Status',
				fr_FR : 'Status'
			}
		},
		codecs : {
			title : {
				en_US : 'Codecs',
				fr_FR : 'Codecs'
			},
			audio : {
				en_US : 'Audio',
				fr_FR : 'Audio'
			},
			video : {
				en_US : 'Video',
				fr_FR : 'Vidéo'
			},
			name : {
				en_US : 'Name',
				fr_FR : 'Nom'
			},
			frequency : {
				en_US : 'Frequency',
				fr_FR : 'Fréquence'
			},
			bitrate : {
				en_US : 'Bitrate',
				fr_FR : 'Flux'
			},
			actions : {
				en_US : '',
				fr_FR : ''
			}
		},
		media : {
			title : {
				en_US : 'Media',
				fr_FR : 'Média'
			},
			playback_device : {
				en_US : 'Playback device',
				fr_FR : 'Lecture'		
			},
			ring_device : {
				en_US : 'Ring device',
				fr_FR : 'Sonnerie'		
			},
			capture_device : {
				en_US : 'Capture device',
				fr_FR : 'Enregistrement'		
			},
			video_device : {
				en_US : 'Video',
				fr_FR : 'Vidéo'		
			}
		},
		about : {
			title : {
				en_US : 'About',
				fr_FR : 'À Propos'
			}
		},
		network : {
			title : {
				en_US : 'Network',
				fr_FR : 'Réseau'
			},
			transport : {
				en_US : 'Transport',
				fr_FR : 'Transport'
			},
			port : {
				en_US : 'Port',
				fr_FR : 'Port'
			}
		}
	},
	window : {
		self : {
			title : {
				en_US : 'Self view',
				fr_FR : 'Vue de votre webcam'
			}
		},
		video : {
			title : {
				en_US : 'Video view',
				fr_FR : 'Vue video'
			}
		}
	},
	welcome : {
		title : {
			en_US : 'Welcome',
			fr_FR : 'Bienvenue'
		},
		content : {
			en_US : 'Welcome to Linphone Web',
			fr_FR : 'Bienvenue sur Linphone Web'
		}
	}
};