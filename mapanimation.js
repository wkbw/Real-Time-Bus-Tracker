const busStops = [
/*[-122.203453, 47.6768799],
[-122.203484, 47.6771965],
[-122.203514, 47.6773872],
[-122.203552, 47.6775131],
[-122.203621, 47.6776962],
[-122.203674, 47.6778297],
[-122.203812, 47.6781387],
[-122.203842, 47.6788826],
[-122.20385, 47.6794319],
[-122.20385, 47.6796799],
[-122.203865, 47.6799202],
[-122.20388, 47.6803818],
[-122.20388, 47.6804619],
[-122.203918, 47.6812477],
[-122.203934, 47.681694],
[-122.203934, 47.6821175],
[-122.203934, 47.6822815],
[-122.203934, 47.6823959],
[-122.203949, 47.6824684],
[-122.203979, 47.6825409],
[-122.204033, 47.6827126],
[-122.204041, 47.6827621],
[-122.20414, 47.6829834],
[-122.204239, 47.6831894],
[-122.204315, 47.6833649],
[-122.204384, 47.6835365],
[-122.204399, 47.6835861],
[-122.204399, 47.6836395],
[-122.20443, 47.6842422],
[-122.204468, 47.6855011],
[-122.204468, 47.6856956],
[-122.204483, 47.6860542],
[-122.204521, 47.6871719],
[-122.204521, 47.6873589],
[-122.204552, 47.6880493],
[-122.204605, 47.6896439],
[-122.205162, 47.6896439],
[-122.205574, 47.6896477],
[-122.206009, 47.6896477],
[-122.206459, 47.6896515],
[-122.20874, 47.6896629],
[-122.209946, 47.6896629],
[-122.209961, 47.6899376],
[-122.209976, 47.6901779],
[-122.209976, 47.691494],
[-122.209999, 47.6924782],
[-122.209999, 47.6926003],
[-122.21003, 47.6932602],
[-122.21003, 47.6934738],
[-122.210083, 47.6950531],
[-122.210106, 47.6952133],
[-122.210121, 47.6954308],
[-122.210121, 47.6954803],
[-122.210106, 47.6957169],
[-122.210052, 47.6959839],
[-122.21003, 47.6960793],
[-122.209999, 47.6961594],
[-122.20993, 47.6962814],
[-122.209793, 47.6964722],
[-122.209686, 47.6965981],
[-122.208878, 47.6973305],
[-122.208687, 47.697525],
[-122.20858, 47.6976662],
[-122.208473, 47.6978302],
[-122.208389, 47.6979866],
[-122.208344, 47.6981239],
[-122.208305, 47.6983261],
[-122.208305, 47.6984291],
[-122.208305, 47.6986542],
[-122.208336, 47.6988029],
[-122.208473, 47.6992912],
[-122.208595, 47.6997452],
[-122.208702, 47.7003021],
[-122.20874, 47.7005768],
[-122.208786, 47.7008476],
[-122.208824, 47.7009811],
[-122.208893, 47.7011337],
[-122.208946, 47.7012482],
[-122.209, 47.7013435],
[-122.209137, 47.7015419],
[-122.209221, 47.7016296],
[-122.209961, 47.7022591],
[-122.21003, 47.7023277],
[-122.210106, 47.7024155],
[-122.210243, 47.7026329],
[-122.210312, 47.7027664],
[-122.210342, 47.7028885],
[-122.210381, 47.7031631],
[-122.210396, 47.7040291],
[-122.210426, 47.7047119],
[-122.210464, 47.7054443],
[-122.21048, 47.7057571],
[-122.210503, 47.7071304],
[-122.210518, 47.7073097],
[-122.210518, 47.7075958],
[-122.210503, 47.7077217],
[-122.210495, 47.7078209],
[-122.210464, 47.7079163],
[-122.210426, 47.7080193],
[-122.210312, 47.7081985],
[-122.210152, 47.7083778],
[-122.21003, 47.7084999],
[-122.209915, 47.7085838],
[-122.209778, 47.7086678],
[-122.208786, 47.7092171],
[-122.208549, 47.7093468],
[-122.208336, 47.7094879],
[-122.208183, 47.7096558],
[-122.208084, 47.7097626],
[-122.208046, 47.7098427],
[-122.207977, 47.709938],
[-122.207924, 47.7100792],
[-122.207886, 47.7102127],
[-122.20787, 47.7102776],
[-122.20784, 47.7104492],
[-122.207825, 47.7112312],
[-122.207825, 47.7115288],
[-122.207825, 47.7119217],
[-122.207817, 47.7121925],
[-122.207817, 47.7125053],
[-122.207817, 47.7131119],
[-122.207817, 47.7132759],
[-122.207802, 47.7136345],
[-122.207802, 47.7138786],
[-122.207802, 47.7141533],
[-122.207787, 47.7148399],
[-122.207787, 47.7152634],
[-122.207771, 47.7154655],
[-122.207771, 47.7157211],
[-122.207771, 47.7160225],
[-122.207771, 47.7162132],
[-122.207756, 47.7165794],
[-122.207756, 47.7170448],
[-122.207756, 47.7171211],
[-122.207756, 47.7176781],
[-122.207756, 47.7184868],
[-122.207756, 47.7188187],
[-122.207756, 47.7197456],
[-122.207756, 47.7198219],
[-122.207756, 47.7202988],
[-122.207756, 47.7207565],
[-122.207771, 47.7210693],
[-122.207771, 47.7216225],
[-122.207787, 47.7231216],
[-122.207787, 47.723671],
[-122.207787, 47.7243881],
[-122.207802, 47.7252998],
[-122.207802, 47.7257576],
[-122.207817, 47.7261696],
[-122.207817, 47.7270279],
[-122.207817, 47.7285233],
[-122.207825, 47.7294731],
[-122.20784, 47.7308197],
[-122.20784, 47.7309837],
[-122.207825, 47.731945],
[-122.207855, 47.7330055],
[-122.20784, 47.7330093],
[-122.20784, 47.7333183],
[-122.207817, 47.7341042],
[-122.207771, 47.7353745],
[-122.207733, 47.736702],
[-122.207703, 47.7375641],
[-122.207695, 47.737793],
[-122.207664, 47.7388306],
[-122.207664, 47.7389946],
[-122.20768, 47.739109],
[-122.207733, 47.7392426],
[-122.207802, 47.739357],
[-122.20787, 47.7394524],
[-122.207962, 47.739563],
[-122.208076, 47.7396698],
[-122.208168, 47.7397461],
[-122.208336, 47.7398567],
[-122.208733, 47.7401047],
[-122.208908, 47.7402267],
[-122.209167, 47.7404404],
[-122.209259, 47.7405167],
[-122.209373, 47.7406235],
[-122.209412, 47.7406654],
[-122.20945, 47.740715],
[-122.209862, 47.7412186],
[-122.209984, 47.7413445],
[-122.210106, 47.7414398],
[-122.210236, 47.7415085],
[-122.210381, 47.7415848],
[-122.210548, 47.7416573],
[-122.210686, 47.7417259],
[-122.210808, 47.7418098],
[-122.210899, 47.7418823],
[-122.210968, 47.7419548],
[-122.211037, 47.7420235],
[-122.211082, 47.7420883],
[-122.211136, 47.7421875],
[-122.211174, 47.7422829],
[-122.211227, 47.7424698],
[-122.211273, 47.7426491],
[-122.211311, 47.7428284],
[-122.211365, 47.742981],
[-122.211746, 47.743824],
[-122.211792, 47.7439346],
[-122.211815, 47.7440262],
[-122.21183, 47.744091],
[-122.21183, 47.7441444],
[-122.21183, 47.7441902],
[-122.211815, 47.7442436],
[-122.2118, 47.7442932],
[-122.211792, 47.7443848],
[-122.211746, 47.7445297],
[-122.211739, 47.7446289],
[-122.211739, 47.7447395],
[-122.211746, 47.7448349],
[-122.211761, 47.7448997],
[-122.211792, 47.7449684],
[-122.2118, 47.7450294],
[-122.21183, 47.7450714],
[-122.211868, 47.7451286],
[-122.211929, 47.7452011],
[-122.212006, 47.7452888],
[-122.21212, 47.7454033],
[-122.212212, 47.7454872],
[-122.212318, 47.7456017],
[-122.212433, 47.7457047],
[-122.212517, 47.7458],
[-122.212593, 47.7458992],
[-122.21302, 47.7465591],
[-122.213089, 47.746666],
[-122.213303, 47.7470436],
[-122.213417, 47.7472839],
[-122.213455, 47.7474403],
[-122.213455, 47.747879],
[-122.213417, 47.7482376],
[-122.213348, 47.7489281],
[-122.213295, 47.7495575],
[-122.21328, 47.7495956],
[-122.213226, 47.7496834],
[-122.213196, 47.7497253],
[-122.213127, 47.7498055],
[-122.213058, 47.7498627],
[-122.21299, 47.7499161],
[-122.212936, 47.7499504],
[-122.212852, 47.7499809],
[-122.212517, 47.7500992],
[-122.212364, 47.750145],
[-122.212265, 47.7501793],
[-122.212158, 47.7502403],
[-122.211967, 47.7503471],
[-122.21183, 47.7504425],
[-122.211571, 47.7505989],
[-122.211365, 47.7507477],
[-122.211311, 47.7508736],
[-122.211327, 47.7509842],
[-122.211411, 47.7510872],
[-122.211502, 47.7511597],
[-122.211639, 47.7512131],
[-122.211861, 47.7512817],
[-122.211777, 47.7514267],
[-122.211693, 47.7516289],
[-122.21167, 47.7517548],
[-122.21167, 47.7518387],
[-122.21167, 47.7518768],
[-122.211678, 47.7520065],
[-122.211723, 47.7521591],
[-122.212189, 47.7532768],
[-122.212296, 47.7535782],
[-122.212379, 47.7538338],
[-122.212433, 47.7540588],
[-122.212471, 47.7543335],
[-122.212486, 47.7545242],
[-122.212486, 47.7547379],
[-122.212471, 47.7548828],
[-122.212456, 47.7550507],
[-122.212433, 47.7552071],
[-122.212387, 47.7553558],
[-122.212349, 47.7555237],
[-122.21228, 47.7556992],
[-122.212212, 47.7558899],
[-122.21209, 47.7562103],
[-122.211884, 47.7567673],
[-122.211845, 47.7569084],
[-122.211792, 47.7570267],
[-122.211746, 47.7571526],
[-122.211693, 47.7572937],
[-122.211601, 47.7574615],
[-122.211533, 47.7575836],
[-122.211433, 47.7577133],
[-122.211327, 47.7578316],
[-122.211212, 47.757946],
[-122.21109, 47.7580719],
[-122.210915, 47.7582207],
[-122.210724, 47.7583542],
[-122.210548, 47.7584496],
[-122.210365, 47.7585487],
[-122.210152, 47.7586441],
[-122.20993, 47.7587318],
[-122.20974, 47.7587852],
[-122.209564, 47.7588348],
[-122.209618, 47.7589417],
[-122.209671, 47.7590485],
[-122.209702, 47.7591362],
[-122.209717, 47.7592354],
[-122.209717, 47.7593231],
[-122.209717, 47.7594109],
[-122.209717, 47.7597008],
[-122.209717, 47.7599983],
[-122.209686, 47.7606354],
[-122.209671, 47.7608643],
[-122.209671, 47.7610054],
[-122.209656, 47.7611275],
[-122.209633, 47.7612267],
[-122.209579, 47.7613182],
[-122.209496, 47.7614059],
[-122.209396, 47.7614899],
[-122.209305, 47.7615433],
[-122.209206, 47.7615929],
[-122.209084, 47.761631],
[-122.208931, 47.761673],
[-122.208809, 47.7616806],
[-122.208633, 47.7616882],
[-122.207649, 47.761673],
[-122.207306, 47.7616806],
[-122.20713, 47.7616882],
[-122.205696, 47.761776],
[-122.205315, 47.7617989],
[-122.204659, 47.7618484],
[-122.204041, 47.7618904],
[-122.203331, 47.7619438],
[-122.202377, 47.7619934],
[-122.201859, 47.7620316],
[-122.20163, 47.7620316],
[-122.201569, 47.7620316],
[-122.200356, 47.7620316],
[-122.200203, 47.7620201],
[-122.199997, 47.762001],
[-122.199821, 47.7619743],
[-122.199684, 47.7619629],
[-122.199387, 47.7619514],
[-122.199234, 47.7619591],
[-122.198158, 47.7619705],
[-122.197708, 47.7619934],
[-122.197075, 47.7619934],
[-122.196831, 47.7620239],
[-122.196815, 47.7620239],
[-122.196739, 47.7620544],
[-122.196312, 47.7621727],
[-122.196228, 47.7621956],
[-122.195984, 47.7622833],
[-122.195953, 47.7623024],
[-122.195778, 47.762394],
[-122.195694, 47.7624359],
[-122.195435, 47.7626076],
[-122.194962, 47.7629471],
[-122.194511, 47.7632637],
[-122.194031, 47.7635956],
[-122.193665, 47.7638474],
[-122.193115, 47.7642097],
[-122.192924, 47.7640953],
[-122.192886, 47.7640686],
[-122.192856, 47.7640305],
[-122.192825, 47.7639999],
[-122.192818, 47.763958],
[-122.192802, 47.7639046],
[-122.192787, 47.763855],
[-122.192802, 47.7638016],
[-122.192818, 47.7637482],
[-122.192825, 47.7636871],
[-122.192871, 47.7636337],
[-122.192924, 47.7635498],
[-122.193146, 47.7632561],
[-122.193199, 47.763176],
[-122.193237, 47.7631226],
[-122.193253, 47.763073],
[-122.193253, 47.763031],
[-122.193268, 47.7628365],
[-122.193283, 47.7626076],
[-122.193283, 47.7624397],
[-122.193283, 47.7623444],
[-122.193283, 47.7622719],
[-122.193222, 47.7619934],
[-122.193169, 47.7616043],
[-122.192818, 47.7616234],
[-122.192764, 47.7616386],
[-122.192627, 47.7617226],
[-122.19249, 47.7618179],
[-122.192459, 47.7618408],
[-122.192337, 47.7619247],
[-122.192459, 47.7619743],
[-122.192558, 47.7620049],
[-122.19268, 47.7620163],
[-122.192818, 47.7620163],
[-122.193222, 47.7619934],
[-122.193283, 47.7622719],
[-122.193283, 47.7623444],
[-122.193283, 47.7624397],
[-122.193283, 47.7626076],
[-122.193268, 47.7628365],
[-122.193253, 47.763031],
[-122.193253, 47.763073],
[-122.193237, 47.7631226],
[-122.193199, 47.763176],
[-122.193146, 47.7632561],
[-122.192924, 47.7635498],
[-122.192871, 47.7636337],
[-122.192825, 47.7636871],
[-122.192818, 47.7637482],
[-122.192802, 47.7638016],
[-122.192787, 47.763855],
[-122.192802, 47.7639046],
[-122.192818, 47.763958],
[-122.192825, 47.7639999],
[-122.192856, 47.7640305],
[-122.192886, 47.7640686],
[-122.192924, 47.7640953],
[-122.193115, 47.7642097],
[-122.191856, 47.7650757],
[-122.191628, 47.7652435],
[-122.191544, 47.7653046],
[-122.191452, 47.765377],
[-122.191383, 47.7654648],
[-122.191284, 47.7655602],
[-122.191216, 47.7656479],
[-122.191162, 47.7657166],
[-122.191124, 47.7657967],
[-122.191063, 47.765892],
[-122.191025, 47.7660103],
[-122.190971, 47.7661896],
[-122.190956, 47.7662849],
[-122.190956, 47.7663918],
[-122.190956, 47.7666092],
[-122.190941, 47.7666931],
[-122.190933, 47.7667999],
[-122.190918, 47.7669067],
[-122.190918, 47.7670288],
[-122.190903, 47.7671661],
[-122.190918, 47.7672729],
[-122.190918, 47.7673645],
[-122.190933, 47.7674599],
[-122.190956, 47.7675552],
[-122.190987, 47.7676544],
[-122.19104, 47.7677917],
[-122.191063, 47.767849],
[-122.191093, 47.7678909],
[-122.191109, 47.7679024],
[-122.191132, 47.7679482],
[-122.191132, 47.7679939],
[-122.191147, 47.7680473],
[-122.191132, 47.7680931],
[-122.191124, 47.7681389],
[-122.191109, 47.768177],
[-122.191063, 47.768219],
[-122.19104, 47.7682686],
[-122.191002, 47.7683029],
[-122.190933, 47.7683334],
[-122.190865, 47.7683678],
[-122.190796, 47.768383],
[-122.190712, 47.7684059],
[-122.190491, 47.7684441],
[-122.189621, 47.7686195],
[-122.189369, 47.7686691],
[-122.189125, 47.7687225],
[-122.188538, 47.7688522],
[-122.18779, 47.7690125],
[-122.187599, 47.7690582],
[-122.187393, 47.7690773],
[-122.187202, 47.7690964],
[-122.186981, 47.7691002],
[-122.186531, 47.769104],
[-122.186356, 47.769104],
[-122.186066, 47.769104],
[-122.185905, 47.7691002],
[-122.185715, 47.7690964],
[-122.184906, 47.7690811],
[-122.184822, 47.7690811],
[-122.183022, 47.7690582],
[-122.182419, 47.7690544],
[-122.182022, 47.7690544],
[-122.18148, 47.7690468],
[-122.181343, 47.769043],
[-122.180168, 47.7690353],
[-122.180168, 47.7695541],
[-122.180176, 47.770752],
[-122.180206, 47.7725716],
[-122.180191, 47.7732315],
[-122.180191, 47.7746086],
[-122.180191, 47.7748413],
[-122.180206, 47.7763672],
[-122.180222, 47.7765732],
[-122.180305, 47.7774696],
[-122.180359, 47.778141],
[-122.182121, 47.7781563],
[-122.182312, 47.7781601],
[-122.182457, 47.7781715],
[-122.18264, 47.7781868],
[-122.182785, 47.7782021],
[-122.182884, 47.7782135],
[-122.182968, 47.7782211],
[-122.183044, 47.7782402],
[-122.183182, 47.7782631],
[-122.183334, 47.778286],
[-122.183487, 47.7783241],
[-122.183624, 47.7783585],
[-122.1838, 47.7784119],
[-122.184196, 47.7785454],
[-122.184334, 47.7785797],
[-122.184471, 47.7786217],
[-122.184578, 47.7786484],
[-122.184731, 47.7786827],
[-122.184868, 47.7787056],
[-122.185013, 47.7787285],
[-122.185135, 47.7787437],
[-122.185181, 47.7787437],
[-122.185272, 47.7787514],
[-122.185394, 47.7787628],
[-122.185524, 47.7787704],
[-122.185646, 47.7787628],
[-122.185768, 47.7787628],
[-122.18586, 47.7800598], 
[-122.185204, 47.7800484]*/
[ -122.217527, 47.850047], 
[ -122.218872, 47.859562], 
[ -122.217123, 47.871597], 
[ -122.211613, 47.878257], 
[ -122.210455, 47.878062], 
[ -122.202945, 47.877986], 
[ -122.198222, 47.877948], 
[ -122.180771, 47.877817], 
[ -122.173895, 47.877944], 
[ -122.172730, 47.877729], 
[ -122.166319, 47.877881], 
[ -122.164568, 47.877631], 
[ -122.155084, 47.876499], 
[ -122.144781, 47.873189], 
[ -122.136357, 47.869833],
[ -122.131021, 47.863196], 
[ -122.120311, 47.863191],
[ -122.109901, 47.864761],
[ -122.109812, 47.877401],
[ -122.109694, 47.890407],
[ -122.109461, 47.916554], 
[ -122.094233, 47.912957], 
[ -122.087040, 47.912784],
[ -122.078674, 47.913219], 
[ -122.071177, 47.916376], 
[ -122.036279, 47.900420],  
[ -122.007438, 47.872186], 
[ -121.990062, 47.865270], 
[ -121.990592, 47.860357], 
[ -122.005140, 47.857761], 
[ -122.012081, 47.855496], 
[ -122.012108, 47.851602], 
[ -122.004079, 47.848748], 
[ -122.001999, 47.848911], 
[ -121.997201, 47.850445], 
[ -121.989001, 47.850774], 
[ -121.986024, 47.850494], 
[ -121.984032, 47.848934], 
[ -121.982987, 47.849127], 
[ -121.982987, 47.849127]



];

  mapboxgl.accessToken = 'pk.eyJ1Ijoid2tidyIsImEiOiJjbDN4aW92anEzNjczM2dtdWNtZHFub2xkIn0.DPrcKlnyLqTvSNBD9XiWjg';

  const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Leaving home for the dog park!',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-122.206351, 47.833559]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Stopping Willis D. Tucker Community Park for a bus break',
                'iconSize': [46, 45]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-122.138143, 47.863824]
            }, 
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Finally made it to Wiggly Field Off-Leash Dog Park!',
                'iconSize': [65, 35]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-121.976362, 47.845927]
            }
        }
    ]
};


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.210794, 47.834953],
    zoom: 11
});

// Add markers to the map.
for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `url(https://placedog.net/${width}/${height}/)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
        window.alert(marker.properties.message);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
}


var marker = new mapboxgl.Marker()
    .setLngLat([-122.211833, 47.8380])  
    .addTo(map);

let i = 0;
function move() {
    setTimeout(() => {
        if (i >= busStops.length) return;
        marker.setLngLat(busStops[i]);
        i++;
        move();
    }, 1000);
} 