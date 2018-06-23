const colors = [
	{
		name: 'AliceBlue',
		rgb: 'rgb(240, 248, 255)',
		hex: '#F0F8FF'
	},
	{
		name: 'AntiqueWhite',
		rgb: 'rgb(250, 235, 215)',
		hex: '#FAEBD7'
	},
	{
		name: 'AntiqueWhite1',
		rgb: 'rgb(255, 239, 219)',
		hex: '#FFEFDB'
	},
	{
		name: 'AntiqueWhite2',
		rgb: 'rgb(238, 223, 204)',
		hex: '#EEDFCC'
	},
	{
		name: 'AntiqueWhite3',
		rgb: 'rgb(205, 192, 176)',
		hex: '#CDC0B0'
	},
	{
		name: 'AntiqueWhite4',
		rgb: 'rgb(139, 131, 120)',
		hex: '#8B8378'
	},
	{
		name: 'BlanchedAlmond',
		rgb: 'rgb(255, 235, 205)',
		hex: '#FFEBCD'
	},
	{
		name: 'BlueViolet',
		rgb: 'rgb(138, 43, 226)',
		hex: '#8A2BE2'
	},
	{
		name: 'CadetBlue',
		rgb: 'rgb( 95, 158, 160)',
		hex: '#5F9EA0'
	},
	{
		name: 'CadetBlue1',
		rgb: 'rgb(152, 245, 255)',
		hex: '#98F5FF'
	},
	{
		name: 'CadetBlue2',
		rgb: 'rgb(142, 229, 238)',
		hex: '#8EE5EE'
	},
	{
		name: 'CadetBlue3',
		rgb: 'rgb(122, 197, 205)',
		hex: '#7AC5CD'
	},
	{
		name: 'CadetBlue4',
		rgb: 'rgb( 83, 134, 139)',
		hex: '#53868B'
	},
	{
		name: 'CornflowerBlue',
		rgb: 'rgb(100, 149, 237)',
		hex: '#6495ED'
	},
	{
		name: 'DarkBlue',
		rgb: 'rgb( 0, 0, 139)',
		hex: '#00008B'
	},
	{
		name: 'DarkCyan',
		rgb: 'rgb( 0, 139, 139)',
		hex: '#008B8B'
	},
	{
		name: 'DarkGoldenrod',
		rgb: 'rgb(184, 134, 11)',
		hex: '#B8860B'
	},
	{
		name: 'DarkGoldenrod1',
		rgb: 'rgb(255, 185, 15)',
		hex: '#FFB90F'
	},
	{
		name: 'DarkGoldenrod2',
		rgb: 'rgb(238, 173, 14)',
		hex: '#EEAD0E'
	},
	{
		name: 'DarkGoldenrod3',
		rgb: 'rgb(205, 149, 12)',
		hex: '#CD950C'
	},
	{
		name: 'DarkGoldenrod4',
		rgb: 'rgb(139, 101, 8)',
		hex: '#8B6508'
	},
	{
		name: 'DarkGray',
		rgb: 'rgb(169, 169, 169)',
		hex: '#A9A9A9'
	},
	{
		name: 'DarkGreen',
		rgb: 'rgb( 0, 100, 0)',
		hex: '#006400'
	},
	{
		name: 'DarkGrey',
		rgb: 'rgb(169, 169, 169)',
		hex: '#A9A9A9'
	},
	{
		name: 'DarkKhaki',
		rgb: 'rgb(189, 183, 107)',
		hex: '#BDB76B'
	},
	{
		name: 'DarkMagenta',
		rgb: 'rgb(139, 0, 139)',
		hex: '#8B008B'
	},
	{
		name: 'DarkOliveGreen',
		rgb: 'rgb( 85, 107, 47)',
		hex: '#556B2F'
	},
	{
		name: 'DarkOliveGreen1',
		rgb: 'rgb(202, 255, 112)',
		hex: '#CAFF70'
	},
	{
		name: 'DarkOliveGreen2',
		rgb: 'rgb(188, 238, 104)',
		hex: '#BCEE68'
	},
	{
		name: 'DarkOliveGreen3',
		rgb: 'rgb(162, 205, 90)',
		hex: '#A2CD5A'
	},
	{
		name: 'DarkOliveGreen4',
		rgb: 'rgb(110, 139, 61)',
		hex: '#6E8B3D'
	},
	{
		name: 'DarkOrange',
		rgb: 'rgb(255, 140, 0)',
		hex: '#FF8C00'
	},
	{
		name: 'DarkOrange1',
		rgb: 'rgb(255, 127, 0)',
		hex: '#FF7F00'
	},
	{
		name: 'DarkOrange2',
		rgb: 'rgb(238, 118, 0)',
		hex: '#EE7600'
	},
	{
		name: 'DarkOrange3',
		rgb: 'rgb(205, 102, 0)',
		hex: '#CD6600'
	},
	{
		name: 'DarkOrange4',
		rgb: 'rgb(139, 69, 0)',
		hex: '#8B4500'
	},
	{
		name: 'DarkOrchid',
		rgb: 'rgb(153, 50, 204)',
		hex: '#9932CC'
	},
	{
		name: 'DarkOrchid1',
		rgb: 'rgb(191, 62, 255)',
		hex: '#BF3EFF'
	},
	{
		name: 'DarkOrchid2',
		rgb: 'rgb(178, 58, 238)',
		hex: '#B23AEE'
	},
	{
		name: 'DarkOrchid3',
		rgb: 'rgb(154, 50, 205)',
		hex: '#9A32CD'
	},
	{
		name: 'DarkOrchid4',
		rgb: 'rgb(104, 34, 139)',
		hex: '#68228B'
	},
	{
		name: 'DarkRed',
		rgb: 'rgb(139, 0, 0)',
		hex: '#8B0000'
	},
	{
		name: 'DarkSalmon',
		rgb: 'rgb(233, 150, 122)',
		hex: '#E9967A'
	},
	{
		name: 'DarkSeaGreen',
		rgb: 'rgb(143, 188, 143)',
		hex: '#8FBC8F'
	},
	{
		name: 'DarkSeaGreen1',
		rgb: 'rgb(193, 255, 193)',
		hex: '#C1FFC1'
	},
	{
		name: 'DarkSeaGreen2',
		rgb: 'rgb(180, 238, 180)',
		hex: '#B4EEB4'
	},
	{
		name: 'DarkSeaGreen3',
		rgb: 'rgb(155, 205, 155)',
		hex: '#9BCD9B'
	},
	{
		name: 'DarkSeaGreen4',
		rgb: 'rgb(105, 139, 105)',
		hex: '#698B69'
	},
	{
		name: 'DarkSlateBlue',
		rgb: 'rgb( 72, 61, 139)',
		hex: '#483D8B'
	},
	{
		name: 'DarkSlateGray',
		rgb: 'rgb( 47, 79, 79)',
		hex: '#2F4F4F'
	},
	{
		name: 'DarkSlateGray1',
		rgb: 'rgb(151, 255, 255)',
		hex: '#97FFFF'
	},
	{
		name: 'DarkSlateGray2',
		rgb: 'rgb(141, 238, 238)',
		hex: '#8DEEEE'
	},
	{
		name: 'DarkSlateGray3',
		rgb: 'rgb(121, 205, 205)',
		hex: '#79CDCD'
	},
	{
		name: 'DarkSlateGray4',
		rgb: 'rgb( 82, 139, 139)',
		hex: '#528B8B'
	},
	{
		name: 'DarkSlateGrey',
		rgb: 'rgb( 47, 79, 79)',
		hex: '#2F4F4F'
	},
	{
		name: 'DarkTurquoise',
		rgb: 'rgb( 0, 206, 209)',
		hex: '#00CED1'
	},
	{
		name: 'DarkViolet',
		rgb: 'rgb(148, 0, 211)',
		hex: '#9400D3'
	},
	{
		name: 'DeepPink',
		rgb: 'rgb(255, 20, 147)',
		hex: '#FF1493'
	},
	{
		name: 'DeepPink1',
		rgb: 'rgb(255, 20, 147)',
		hex: '#FF1493'
	},
	{
		name: 'DeepPink2',
		rgb: 'rgb(238, 18, 137)',
		hex: '#EE1289'
	},
	{
		name: 'DeepPink3',
		rgb: 'rgb(205, 16, 118)',
		hex: '#CD1076'
	},
	{
		name: 'DeepPink4',
		rgb: 'rgb(139, 10, 80)',
		hex: '#8B0A50'
	},
	{
		name: 'DeepSkyBlue',
		rgb: 'rgb( 0, 191, 255)',
		hex: '#00BFFF'
	},
	{
		name: 'DeepSkyBlue1',
		rgb: 'rgb( 0, 191, 255)',
		hex: '#00BFFF'
	},
	{
		name: 'DeepSkyBlue2',
		rgb: 'rgb( 0, 178, 238)',
		hex: '#00B2EE'
	},
	{
		name: 'DeepSkyBlue3',
		rgb: 'rgb( 0, 154, 205)',
		hex: '#009ACD'
	},
	{
		name: 'DeepSkyBlue4',
		rgb: 'rgb( 0, 104, 139)',
		hex: '#00688B'
	},
	{
		name: 'DimGray',
		rgb: 'rgb(105, 105, 105)',
		hex: '#696969'
	},
	{
		name: 'DimGrey',
		rgb: 'rgb(105, 105, 105)',
		hex: '#696969'
	},
	{
		name: 'DodgerBlue',
		rgb: 'rgb( 30, 144, 255)',
		hex: '#1E90FF'
	},
	{
		name: 'DodgerBlue1',
		rgb: 'rgb( 30, 144, 255)',
		hex: '#1E90FF'
	},
	{
		name: 'DodgerBlue2',
		rgb: 'rgb( 28, 134, 238)',
		hex: '#1C86EE'
	},
	{
		name: 'DodgerBlue3',
		rgb: 'rgb( 24, 116, 205)',
		hex: '#1874CD'
	},
	{
		name: 'DodgerBlue4',
		rgb: 'rgb( 16, 78, 139)',
		hex: '#104E8B'
	},
	{
		name: 'FloralWhite',
		rgb: 'rgb(255, 250, 240)',
		hex: '#FFFAF0'
	},
	{
		name: 'ForestGreen',
		rgb: 'rgb( 34, 139, 34)',
		hex: '#228B22'
	},
	{
		name: 'GhostWhite',
		rgb: 'rgb(248, 248, 255)',
		hex: '#F8F8FF'
	},
	{
		name: 'GreenYellow',
		rgb: 'rgb(173, 255, 47)',
		hex: '#ADFF2F'
	},
	{
		name: 'HotPink',
		rgb: 'rgb(255, 105, 180)',
		hex: '#FF69B4'
	},
	{
		name: 'HotPink1',
		rgb: 'rgb(255, 110, 180)',
		hex: '#FF6EB4'
	},
	{
		name: 'HotPink2',
		rgb: 'rgb(238, 106, 167)',
		hex: '#EE6AA7'
	},
	{
		name: 'HotPink3',
		rgb: 'rgb(205, 96, 144)',
		hex: '#CD6090'
	},
	{
		name: 'HotPink4',
		rgb: 'rgb(139, 58, 98)',
		hex: '#8B3A62'
	},
	{
		name: 'IndianRed',
		rgb: 'rgb(205, 92, 92)',
		hex: '#CD5C5C'
	},
	{
		name: 'IndianRed1',
		rgb: 'rgb(255, 106, 106)',
		hex: '#FF6A6A'
	},
	{
		name: 'IndianRed2',
		rgb: 'rgb(238, 99, 99)',
		hex: '#EE6363'
	},
	{
		name: 'IndianRed3',
		rgb: 'rgb(205, 85, 85)',
		hex: '#CD5555'
	},
	{
		name: 'IndianRed4',
		rgb: 'rgb(139, 58, 58)',
		hex: '#8B3A3A'
	},
	{
		name: 'LavenderBlush',
		rgb: 'rgb(255, 240, 245)',
		hex: '#FFF0F5'
	},
	{
		name: 'LavenderBlush1',
		rgb: 'rgb(255, 240, 245)',
		hex: '#FFF0F5'
	},
	{
		name: 'LavenderBlush2',
		rgb: 'rgb(238, 224, 229)',
		hex: '#EEE0E5'
	},
	{
		name: 'LavenderBlush3',
		rgb: 'rgb(205, 193, 197)',
		hex: '#CDC1C5'
	},
	{
		name: 'LavenderBlush4',
		rgb: 'rgb(139, 131, 134)',
		hex: '#8B8386'
	},
	{
		name: 'LawnGreen',
		rgb: 'rgb(124, 252, 0)',
		hex: '#7CFC00'
	},
	{
		name: 'LemonChiffon',
		rgb: 'rgb(255, 250, 205)',
		hex: '#FFFACD'
	},
	{
		name: 'LemonChiffon1',
		rgb: 'rgb(255, 250, 205)',
		hex: '#FFFACD'
	},
	{
		name: 'LemonChiffon2',
		rgb: 'rgb(238, 233, 191)',
		hex: '#EEE9BF'
	},
	{
		name: 'LemonChiffon3',
		rgb: 'rgb(205, 201, 165)',
		hex: '#CDC9A5'
	},
	{
		name: 'LemonChiffon4',
		rgb: 'rgb(139, 137, 112)',
		hex: '#8B8970'
	},
	{
		name: 'LightBlue',
		rgb: 'rgb(173, 216, 230)',
		hex: '#ADD8E6'
	},
	{
		name: 'LightBlue1',
		rgb: 'rgb(191, 239, 255)',
		hex: '#BFEFFF'
	},
	{
		name: 'LightBlue2',
		rgb: 'rgb(178, 223, 238)',
		hex: '#B2DFEE'
	},
	{
		name: 'LightBlue3',
		rgb: 'rgb(154, 192, 205)',
		hex: '#9AC0CD'
	},
	{
		name: 'LightBlue4',
		rgb: 'rgb(104, 131, 139)',
		hex: '#68838B'
	},
	{
		name: 'LightCoral',
		rgb: 'rgb(240, 128, 128)',
		hex: '#F08080'
	},
	{
		name: 'LightCyan',
		rgb: 'rgb(224, 255, 255)',
		hex: '#E0FFFF'
	},
	{
		name: 'LightCyan1',
		rgb: 'rgb(224, 255, 255)',
		hex: '#E0FFFF'
	},
	{
		name: 'LightCyan2',
		rgb: 'rgb(209, 238, 238)',
		hex: '#D1EEEE'
	},
	{
		name: 'LightCyan3',
		rgb: 'rgb(180, 205, 205)',
		hex: '#B4CDCD'
	},
	{
		name: 'LightCyan4',
		rgb: 'rgb(122, 139, 139)',
		hex: '#7A8B8B'
	},
	{
		name: 'LightGoldenrod',
		rgb: 'rgb(238, 221, 130)',
		hex: '#EEDD82'
	},
	{
		name: 'LightGoldenrod1',
		rgb: 'rgb(255, 236, 139)',
		hex: '#FFEC8B'
	},
	{
		name: 'LightGoldenrod2',
		rgb: 'rgb(238, 220, 130)',
		hex: '#EEDC82'
	},
	{
		name: 'LightGoldenrod3',
		rgb: 'rgb(205, 190, 112)',
		hex: '#CDBE70'
	},
	{
		name: 'LightGoldenrod4',
		rgb: 'rgb(139, 129, 76)',
		hex: '#8B814C'
	},
	{
		name: 'LightGoldenrodYellow',
		rgb: 'rgb(250, 250, 210)',
		hex: '#FAFAD2'
	},
	{
		name: 'LightGray',
		rgb: 'rgb(211, 211, 211)',
		hex: '#D3D3D3'
	},
	{
		name: 'LightGreen',
		rgb: 'rgb(144, 238, 144)',
		hex: '#90EE90'
	},
	{
		name: 'LightGrey',
		rgb: 'rgb(211, 211, 211)',
		hex: '#D3D3D3'
	},
	{
		name: 'LightPink',
		rgb: 'rgb(255, 182, 193)',
		hex: '#FFB6C1'
	},
	{
		name: 'LightPink1',
		rgb: 'rgb(255, 174, 185)',
		hex: '#FFAEB9'
	},
	{
		name: 'LightPink2',
		rgb: 'rgb(238, 162, 173)',
		hex: '#EEA2AD'
	},
	{
		name: 'LightPink3',
		rgb: 'rgb(205, 140, 149)',
		hex: '#CD8C95'
	},
	{
		name: 'LightPink4',
		rgb: 'rgb(139, 95, 101)',
		hex: '#8B5F65'
	},
	{
		name: 'LightSalmon',
		rgb: 'rgb(255, 160, 122)',
		hex: '#FFA07A'
	},
	{
		name: 'LightSalmon1',
		rgb: 'rgb(255, 160, 122)',
		hex: '#FFA07A'
	},
	{
		name: 'LightSalmon2',
		rgb: 'rgb(238, 149, 114)',
		hex: '#EE9572'
	},
	{
		name: 'LightSalmon3',
		rgb: 'rgb(205, 129, 98)',
		hex: '#CD8162'
	},
	{
		name: 'LightSalmon4',
		rgb: 'rgb(139, 87, 66)',
		hex: '#8B5742'
	},
	{
		name: 'LightSeaGreen',
		rgb: 'rgb( 32, 178, 170)',
		hex: '#20B2AA'
	},
	{
		name: 'LightSkyBlue',
		rgb: 'rgb(135, 206, 250)',
		hex: '#87CEFA'
	},
	{
		name: 'LightSkyBlue1',
		rgb: 'rgb(176, 226, 255)',
		hex: '#B0E2FF'
	},
	{
		name: 'LightSkyBlue2',
		rgb: 'rgb(164, 211, 238)',
		hex: '#A4D3EE'
	},
	{
		name: 'LightSkyBlue3',
		rgb: 'rgb(141, 182, 205)',
		hex: '#8DB6CD'
	},
	{
		name: 'LightSkyBlue4',
		rgb: 'rgb( 96, 123, 139)',
		hex: '#607B8B'
	},
	{
		name: 'LightSlateBlue',
		rgb: 'rgb(132, 112, 255)',
		hex: '#8470FF'
	},
	{
		name: 'LightSlateGray',
		rgb: 'rgb(119, 136, 153)',
		hex: '#778899'
	},
	{
		name: 'LightSlateGrey',
		rgb: 'rgb(119, 136, 153)',
		hex: '#778899'
	},
	{
		name: 'LightSteelBlue',
		rgb: 'rgb(176, 196, 222)',
		hex: '#B0C4DE'
	},
	{
		name: 'LightSteelBlue1',
		rgb: 'rgb(202, 225, 255)',
		hex: '#CAE1FF'
	},
	{
		name: 'LightSteelBlue2',
		rgb: 'rgb(188, 210, 238)',
		hex: '#BCD2EE'
	},
	{
		name: 'LightSteelBlue3',
		rgb: 'rgb(162, 181, 205)',
		hex: '#A2B5CD'
	},
	{
		name: 'LightSteelBlue4',
		rgb: 'rgb(110, 123, 139)',
		hex: '#6E7B8B'
	},
	{
		name: 'LightYellow',
		rgb: 'rgb(255, 255, 224)',
		hex: '#FFFFE0'
	},
	{
		name: 'LightYellow1',
		rgb: 'rgb(255, 255, 224)',
		hex: '#FFFFE0'
	},
	{
		name: 'LightYellow2',
		rgb: 'rgb(238, 238, 209)',
		hex: '#EEEED1'
	},
	{
		name: 'LightYellow3',
		rgb: 'rgb(205, 205, 180)',
		hex: '#CDCDB4'
	},
	{
		name: 'LightYellow4',
		rgb: 'rgb(139, 139, 122)',
		hex: '#8B8B7A'
	},
	{
		name: 'LimeGreen',
		rgb: 'rgb( 50, 205, 50)',
		hex: '#32CD32'
	},
	{
		name: 'MediumAquamarine',
		rgb: 'rgb(102, 205, 170)',
		hex: '#66CDAA'
	},
	{
		name: 'MediumBlue',
		rgb: 'rgb( 0, 0, 205)',
		hex: '#0000CD'
	},
	{
		name: 'MediumForestGreen',
		rgb: 'rgb( 50, 129, 75)',
		hex: '#32814B'
	},
	{
		name: 'MediumGoldenRod',
		rgb: 'rgb(209, 193, 102)',
		hex: '#D1C166'
	},
	{
		name: 'MediumOrchid',
		rgb: 'rgb(186, 85, 211)',
		hex: '#BA55D3'
	},
	{
		name: 'MediumOrchid1',
		rgb: 'rgb(224, 102, 255)',
		hex: '#E066FF'
	},
	{
		name: 'MediumOrchid2',
		rgb: 'rgb(209, 95, 238)',
		hex: '#D15FEE'
	},
	{
		name: 'MediumOrchid3',
		rgb: 'rgb(180, 82, 205)',
		hex: '#B452CD'
	},
	{
		name: 'MediumOrchid4',
		rgb: 'rgb(122, 55, 139)',
		hex: '#7A378B'
	},
	{
		name: 'MediumPurple',
		rgb: 'rgb(147, 112, 219)',
		hex: '#9370DB'
	},
	{
		name: 'MediumPurple1',
		rgb: 'rgb(171, 130, 255)',
		hex: '#AB82FF'
	},
	{
		name: 'MediumPurple2',
		rgb: 'rgb(159, 121, 238)',
		hex: '#9F79EE'
	},
	{
		name: 'MediumPurple3',
		rgb: 'rgb(137, 104, 205)',
		hex: '#8968CD'
	},
	{
		name: 'MediumPurple4',
		rgb: 'rgb( 93, 71, 139)',
		hex: '#5D478B'
	},
	{
		name: 'MediumSeaGreen',
		rgb: 'rgb( 60, 179, 113)',
		hex: '#3CB371'
	},
	{
		name: 'MediumSlateBlue',
		rgb: 'rgb(123, 104, 238)',
		hex: '#7B68EE'
	},
	{
		name: 'MediumSpringGreen',
		rgb: 'rgb( 0, 250, 154)',
		hex: '#00FA9A'
	},
	{
		name: 'MediumTurquoise',
		rgb: 'rgb( 72, 209, 204)',
		hex: '#48D1CC'
	},
	{
		name: 'MediumVioletRed',
		rgb: 'rgb(199, 21, 133)',
		hex: '#C71585'
	},
	{
		name: 'MidnightBlue',
		rgb: 'rgb( 25, 25, 112)',
		hex: '#191970'
	},
	{
		name: 'MintCream',
		rgb: 'rgb(245, 255, 250)',
		hex: '#F5FFFA'
	},
	{
		name: 'MistyRose',
		rgb: 'rgb(255, 228, 225)',
		hex: '#FFE4E1'
	},
	{
		name: 'MistyRose1',
		rgb: 'rgb(255, 228, 225)',
		hex: '#FFE4E1'
	},
	{
		name: 'MistyRose2',
		rgb: 'rgb(238, 213, 210)',
		hex: '#EED5D2'
	},
	{
		name: 'MistyRose3',
		rgb: 'rgb(205, 183, 181)',
		hex: '#CDB7B5'
	},
	{
		name: 'MistyRose4',
		rgb: 'rgb(139, 125, 123)',
		hex: '#8B7D7B'
	},
	{
		name: 'NavajoWhite',
		rgb: 'rgb(255, 222, 173)',
		hex: '#FFDEAD'
	},
	{
		name: 'NavajoWhite1',
		rgb: 'rgb(255, 222, 173)',
		hex: '#FFDEAD'
	},
	{
		name: 'NavajoWhite2',
		rgb: 'rgb(238, 207, 161)',
		hex: '#EECFA1'
	},
	{
		name: 'NavajoWhite3',
		rgb: 'rgb(205, 179, 139)',
		hex: '#CDB38B'
	},
	{
		name: 'NavajoWhite4',
		rgb: 'rgb(139, 121, 94)',
		hex: '#8B795E'
	},
	{
		name: 'NavyBlue',
		rgb: 'rgb( 0, 0, 128)',
		hex: '#000080'
	},
	{
		name: 'OldLace',
		rgb: 'rgb(253, 245, 230)',
		hex: '#FDF5E6'
	},
	{
		name: 'OliveDrab',
		rgb: 'rgb(107, 142, 35)',
		hex: '#6B8E23'
	},
	{
		name: 'OliveDrab1',
		rgb: 'rgb(192, 255, 62)',
		hex: '#C0FF3E'
	},
	{
		name: 'OliveDrab2',
		rgb: 'rgb(179, 238, 58)',
		hex: '#B3EE3A'
	},
	{
		name: 'OliveDrab3',
		rgb: 'rgb(154, 205, 50)',
		hex: '#9ACD32'
	},
	{
		name: 'OliveDrab4',
		rgb: 'rgb(105, 139, 34)',
		hex: '#698B22'
	},
	{
		name: 'OrangeRed',
		rgb: 'rgb(255, 69, 0)',
		hex: '#FF4500'
	},
	{
		name: 'OrangeRed1',
		rgb: 'rgb(255, 69, 0)',
		hex: '#FF4500'
	},
	{
		name: 'OrangeRed2',
		rgb: 'rgb(238, 64, 0)',
		hex: '#EE4000'
	},
	{
		name: 'OrangeRed3',
		rgb: 'rgb(205, 55, 0)',
		hex: '#CD3700'
	},
	{
		name: 'OrangeRed4',
		rgb: 'rgb(139, 37, 0)',
		hex: '#8B2500'
	},
	{
		name: 'PaleGoldenrod',
		rgb: 'rgb(238, 232, 170)',
		hex: '#EEE8AA'
	},
	{
		name: 'PaleGreen',
		rgb: 'rgb(152, 251, 152)',
		hex: '#98FB98'
	},
	{
		name: 'PaleGreen1',
		rgb: 'rgb(154, 255, 154)',
		hex: '#9AFF9A'
	},
	{
		name: 'PaleGreen2',
		rgb: 'rgb(144, 238, 144)',
		hex: '#90EE90'
	},
	{
		name: 'PaleGreen3',
		rgb: 'rgb(124, 205, 124)',
		hex: '#7CCD7C'
	},
	{
		name: 'PaleGreen4',
		rgb: 'rgb( 84, 139, 84)',
		hex: '#548B54'
	},
	{
		name: 'PaleTurquoise',
		rgb: 'rgb(175, 238, 238)',
		hex: '#AFEEEE'
	},
	{
		name: 'PaleTurquoise1',
		rgb: 'rgb(187, 255, 255)',
		hex: '#BBFFFF'
	},
	{
		name: 'PaleTurquoise2',
		rgb: 'rgb(174, 238, 238)',
		hex: '#AEEEEE'
	},
	{
		name: 'PaleTurquoise3',
		rgb: 'rgb(150, 205, 205)',
		hex: '#96CDCD'
	},
	{
		name: 'PaleTurquoise4',
		rgb: 'rgb(102, 139, 139)',
		hex: '#668B8B'
	},
	{
		name: 'PaleVioletRed',
		rgb: 'rgb(219, 112, 147)',
		hex: '#DB7093'
	},
	{
		name: 'PaleVioletRed1',
		rgb: 'rgb(255, 130, 171)',
		hex: '#FF82AB'
	},
	{
		name: 'PaleVioletRed2',
		rgb: 'rgb(238, 121, 159)',
		hex: '#EE799F'
	},
	{
		name: 'PaleVioletRed3',
		rgb: 'rgb(205, 104, 137)',
		hex: '#CD6889'
	},
	{
		name: 'PaleVioletRed4',
		rgb: 'rgb(139, 71, 93)',
		hex: '#8B475D'
	},
	{
		name: 'PapayaWhip',
		rgb: 'rgb(255, 239, 213)',
		hex: '#FFEFD5'
	},
	{
		name: 'PeachPuff',
		rgb: 'rgb(255, 218, 185)',
		hex: '#FFDAB9'
	},
	{
		name: 'PeachPuff1',
		rgb: 'rgb(255, 218, 185)',
		hex: '#FFDAB9'
	},
	{
		name: 'PeachPuff2',
		rgb: 'rgb(238, 203, 173)',
		hex: '#EECBAD'
	},
	{
		name: 'PeachPuff3',
		rgb: 'rgb(205, 175, 149)',
		hex: '#CDAF95'
	},
	{
		name: 'PeachPuff4',
		rgb: 'rgb(139, 119, 101)',
		hex: '#8B7765'
	},
	{
		name: 'PowderBlue',
		rgb: 'rgb(176, 224, 230)',
		hex: '#B0E0E6'
	},
	{
		name: 'RosyBrown',
		rgb: 'rgb(188, 143, 143)',
		hex: '#BC8F8F'
	},
	{
		name: 'RosyBrown1',
		rgb: 'rgb(255, 193, 193)',
		hex: '#FFC1C1'
	},
	{
		name: 'RosyBrown2',
		rgb: 'rgb(238, 180, 180)',
		hex: '#EEB4B4'
	},
	{
		name: 'RosyBrown3',
		rgb: 'rgb(205, 155, 155)',
		hex: '#CD9B9B'
	},
	{
		name: 'RosyBrown4',
		rgb: 'rgb(139, 105, 105)',
		hex: '#8B6969'
	},
	{
		name: 'RoyalBlue',
		rgb: 'rgb( 65, 105, 225)',
		hex: '#4169E1'
	},
	{
		name: 'RoyalBlue1',
		rgb: 'rgb( 72, 118, 255)',
		hex: '#4876FF'
	},
	{
		name: 'RoyalBlue2',
		rgb: 'rgb( 67, 110, 238)',
		hex: '#436EEE'
	},
	{
		name: 'RoyalBlue3',
		rgb: 'rgb( 58, 95, 205)',
		hex: '#3A5FCD'
	},
	{
		name: 'RoyalBlue4',
		rgb: 'rgb( 39, 64, 139)',
		hex: '#27408B'
	},
	{
		name: 'SaddleBrown',
		rgb: 'rgb(139, 69, 19)',
		hex: '#8B4513'
	},
	{
		name: 'SandyBrown',
		rgb: 'rgb(244, 164, 96)',
		hex: '#F4A460'
	},
	{
		name: 'SeaGreen',
		rgb: 'rgb( 46, 139, 87)',
		hex: '#2E8B57'
	},
	{
		name: 'SeaGreen1',
		rgb: 'rgb( 84, 255, 159)',
		hex: '#54FF9F'
	},
	{
		name: 'SeaGreen2',
		rgb: 'rgb( 78, 238, 148)',
		hex: '#4EEE94'
	},
	{
		name: 'SeaGreen3',
		rgb: 'rgb( 67, 205, 128)',
		hex: '#43CD80'
	},
	{
		name: 'SeaGreen4',
		rgb: 'rgb( 46, 139, 87)',
		hex: '#2E8B57'
	},
	{
		name: 'SkyBlue',
		rgb: 'rgb(135, 206, 235)',
		hex: '#87CEEB'
	},
	{
		name: 'SkyBlue1',
		rgb: 'rgb(135, 206, 255)',
		hex: '#87CEFF'
	},
	{
		name: 'SkyBlue2',
		rgb: 'rgb(126, 192, 238)',
		hex: '#7EC0EE'
	},
	{
		name: 'SkyBlue3',
		rgb: 'rgb(108, 166, 205)',
		hex: '#6CA6CD'
	},
	{
		name: 'SkyBlue4',
		rgb: 'rgb( 74, 112, 139)',
		hex: '#4A708B'
	},
	{
		name: 'SlateBlue',
		rgb: 'rgb(106, 90, 205)',
		hex: '#6A5ACD'
	},
	{
		name: 'SlateBlue1',
		rgb: 'rgb(131, 111, 255)',
		hex: '#836FFF'
	},
	{
		name: 'SlateBlue2',
		rgb: 'rgb(122, 103, 238)',
		hex: '#7A67EE'
	},
	{
		name: 'SlateBlue3',
		rgb: 'rgb(105, 89, 205)',
		hex: '#6959CD'
	},
	{
		name: 'SlateBlue4',
		rgb: 'rgb( 71, 60, 139)',
		hex: '#473C8B'
	},
	{
		name: 'SlateGray',
		rgb: 'rgb(112, 128, 144)',
		hex: '#708090'
	},
	{
		name: 'SlateGray1',
		rgb: 'rgb(198, 226, 255)',
		hex: '#C6E2FF'
	},
	{
		name: 'SlateGray2',
		rgb: 'rgb(185, 211, 238)',
		hex: '#B9D3EE'
	},
	{
		name: 'SlateGray3',
		rgb: 'rgb(159, 182, 205)',
		hex: '#9FB6CD'
	},
	{
		name: 'SlateGray4',
		rgb: 'rgb(108, 123, 139)',
		hex: '#6C7B8B'
	},
	{
		name: 'SlateGrey',
		rgb: 'rgb(112, 128, 144)',
		hex: '#708090'
	},
	{
		name: 'SpringGreen',
		rgb: 'rgb( 0, 255, 127)',
		hex: '#00FF7F'
	},
	{
		name: 'SpringGreen1',
		rgb: 'rgb( 0, 255, 127)',
		hex: '#00FF7F'
	},
	{
		name: 'SpringGreen2',
		rgb: 'rgb( 0, 238, 118)',
		hex: '#00EE76'
	},
	{
		name: 'SpringGreen3',
		rgb: 'rgb( 0, 205, 102)',
		hex: '#00CD66'
	},
	{
		name: 'SpringGreen4',
		rgb: 'rgb( 0, 139, 69)',
		hex: '#008B45'
	},
	{
		name: 'SteelBlue',
		rgb: 'rgb( 70, 130, 180)',
		hex: '#4682B4'
	},
	{
		name: 'SteelBlue1',
		rgb: 'rgb( 99, 184, 255)',
		hex: '#63B8FF'
	},
	{
		name: 'SteelBlue2',
		rgb: 'rgb( 92, 172, 238)',
		hex: '#5CACEE'
	},
	{
		name: 'SteelBlue3',
		rgb: 'rgb( 79, 148, 205)',
		hex: '#4F94CD'
	},
	{
		name: 'SteelBlue4',
		rgb: 'rgb( 54, 100, 139)',
		hex: '#36648B'
	},
	{
		name: 'VioletRed',
		rgb: 'rgb(208, 32, 144)',
		hex: '#D02090'
	},
	{
		name: 'VioletRed1',
		rgb: 'rgb(255, 62, 150)',
		hex: '#FF3E96'
	},
	{
		name: 'VioletRed2',
		rgb: 'rgb(238, 58, 140)',
		hex: '#EE3A8C'
	},
	{
		name: 'VioletRed3',
		rgb: 'rgb(205, 50, 120)',
		hex: '#CD3278'
	},
	{
		name: 'VioletRed4',
		rgb: 'rgb(139, 34, 82)',
		hex: '#8B2252'
	},
	{
		name: 'WhiteSmoke',
		rgb: 'rgb(245, 245, 245)',
		hex: '#F5F5F5'
	},
	{
		name: 'YellowGreen',
		rgb: 'rgb(154, 205, 50)',
		hex: '#9ACD32'
	},
	{
		name: 'aqua',
		rgb: 'rgb( 0, 255, 255)',
		hex: '#00FFFF'
	},
	{
		name: 'aquamarine',
		rgb: 'rgb(127, 255, 212)',
		hex: '#7FFFD4'
	},
	{
		name: 'aquamarine1',
		rgb: 'rgb(127, 255, 212)',
		hex: '#7FFFD4'
	},
	{
		name: 'aquamarine2',
		rgb: 'rgb(118, 238, 198)',
		hex: '#76EEC6'
	},
	{
		name: 'aquamarine3',
		rgb: 'rgb(102, 205, 170)',
		hex: '#66CDAA'
	},
	{
		name: 'aquamarine4',
		rgb: 'rgb( 69, 139, 116)',
		hex: '#458B74'
	},
	{
		name: 'azure',
		rgb: 'rgb(240, 255, 255)',
		hex: '#F0FFFF'
	},
	{
		name: 'azure1',
		rgb: 'rgb(240, 255, 255)',
		hex: '#F0FFFF'
	},
	{
		name: 'azure2',
		rgb: 'rgb(224, 238, 238)',
		hex: '#E0EEEE'
	},
	{
		name: 'azure3',
		rgb: 'rgb(193, 205, 205)',
		hex: '#C1CDCD'
	},
	{
		name: 'azure4',
		rgb: 'rgb(131, 139, 139)',
		hex: '#838B8B'
	},
	{
		name: 'beige',
		rgb: 'rgb(245, 245, 220)',
		hex: '#F5F5DC'
	},
	{
		name: 'bisque',
		rgb: 'rgb(255, 228, 196)',
		hex: '#FFE4C4'
	},
	{
		name: 'bisque1',
		rgb: 'rgb(255, 228, 196)',
		hex: '#FFE4C4'
	},
	{
		name: 'bisque2',
		rgb: 'rgb(238, 213, 183)',
		hex: '#EED5B7'
	},
	{
		name: 'bisque3',
		rgb: 'rgb(205, 183, 158)',
		hex: '#CDB79E'
	},
	{
		name: 'bisque4',
		rgb: 'rgb(139, 125, 107)',
		hex: '#8B7D6B'
	},
	{
		name: 'black',
		rgb: 'rgb( 0, 0, 0)',
		hex: '#000000'
	},
	{
		name: 'blue',
		rgb: 'rgb( 0, 0, 255)',
		hex: '#0000FF'
	},
	{
		name: 'blue1',
		rgb: 'rgb( 0, 0, 255)',
		hex: '#0000FF'
	},
	{
		name: 'blue2',
		rgb: 'rgb( 0, 0, 238)',
		hex: '#0000EE'
	},
	{
		name: 'blue3',
		rgb: 'rgb( 0, 0, 205)',
		hex: '#0000CD'
	},
	{
		name: 'blue4',
		rgb: 'rgb( 0, 0, 139)',
		hex: '#00008B'
	},
	{
		name: 'brown',
		rgb: 'rgb(165, 42, 42)',
		hex: '#A52A2A'
	},
	{
		name: 'brown1',
		rgb: 'rgb(255, 64, 64)',
		hex: '#FF4040'
	},
	{
		name: 'brown2',
		rgb: 'rgb(238, 59, 59)',
		hex: '#EE3B3B'
	},
	{
		name: 'brown3',
		rgb: 'rgb(205, 51, 51)',
		hex: '#CD3333'
	},
	{
		name: 'brown4',
		rgb: 'rgb(139, 35, 35)',
		hex: '#8B2323'
	},
	{
		name: 'burlywood',
		rgb: 'rgb(222, 184, 135)',
		hex: '#DEB887'
	},
	{
		name: 'burlywood1',
		rgb: 'rgb(255, 211, 155)',
		hex: '#FFD39B'
	},
	{
		name: 'burlywood2',
		rgb: 'rgb(238, 197, 145)',
		hex: '#EEC591'
	},
	{
		name: 'burlywood3',
		rgb: 'rgb(205, 170, 125)',
		hex: '#CDAA7D'
	},
	{
		name: 'burlywood4',
		rgb: 'rgb(139, 115, 85)',
		hex: '#8B7355'
	},
	{
		name: 'cadet blue',
		rgb: 'rgb( 95, 158, 160)',
		hex: '#5F9EA0'
	},
	{
		name: 'chartreuse',
		rgb: 'rgb(127, 255, 0)',
		hex: '#7FFF00'
	},
	{
		name: 'chartreuse1',
		rgb: 'rgb(127, 255, 0)',
		hex: '#7FFF00'
	},
	{
		name: 'chartreuse2',
		rgb: 'rgb(118, 238, 0)',
		hex: '#76EE00'
	},
	{
		name: 'chartreuse3',
		rgb: 'rgb(102, 205, 0)',
		hex: '#66CD00'
	},
	{
		name: 'chartreuse4',
		rgb: 'rgb( 69, 139, 0)',
		hex: '#458B00'
	},
	{
		name: 'chocolate',
		rgb: 'rgb(210, 105, 30)',
		hex: '#D2691E'
	},
	{
		name: 'chocolate1',
		rgb: 'rgb(255, 127, 36)',
		hex: '#FF7F24'
	},
	{
		name: 'chocolate2',
		rgb: 'rgb(238, 118, 33)',
		hex: '#EE7621'
	},
	{
		name: 'chocolate3',
		rgb: 'rgb(205, 102, 29)',
		hex: '#CD661D'
	},
	{
		name: 'chocolate4',
		rgb: 'rgb(139, 69, 19)',
		hex: '#8B4513'
	},
	{
		name: 'coral',
		rgb: 'rgb(255, 127, 80)',
		hex: '#FF7F50'
	},
	{
		name: 'coral1',
		rgb: 'rgb(255, 114, 86)',
		hex: '#FF7256'
	},
	{
		name: 'coral2',
		rgb: 'rgb(238, 106, 80)',
		hex: '#EE6A50'
	},
	{
		name: 'coral3',
		rgb: 'rgb(205, 91, 69)',
		hex: '#CD5B45'
	},
	{
		name: 'coral4',
		rgb: 'rgb(139, 62, 47)',
		hex: '#8B3E2F'
	},
	{
		name: 'cornsilk',
		rgb: 'rgb(255, 248, 220)',
		hex: '#FFF8DC'
	},
	{
		name: 'cornsilk1',
		rgb: 'rgb(255, 248, 220)',
		hex: '#FFF8DC'
	},
	{
		name: 'cornsilk2',
		rgb: 'rgb(238, 232, 205)',
		hex: '#EEE8CD'
	},
	{
		name: 'cornsilk3',
		rgb: 'rgb(205, 200, 177)',
		hex: '#CDC8B1'
	},
	{
		name: 'cornsilk4',
		rgb: 'rgb(139, 136, 120)',
		hex: '#8B8878'
	},
	{
		name: 'crimson',
		rgb: 'rgb(220, 20, 60)',
		hex: '#DC143C'
	},
	{
		name: 'cyan',
		rgb: 'rgb( 0, 255, 255)',
		hex: '#00FFFF'
	},
	{
		name: 'cyan1',
		rgb: 'rgb( 0, 255, 255)',
		hex: '#00FFFF'
	},
	{
		name: 'cyan2',
		rgb: 'rgb( 0, 238, 238)',
		hex: '#00EEEE'
	},
	{
		name: 'cyan3',
		rgb: 'rgb( 0, 205, 205)',
		hex: '#00CDCD'
	},
	{
		name: 'cyan4',
		rgb: 'rgb( 0, 139, 139)',
		hex: '#008B8B'
	},
	{
		name: 'firebrick',
		rgb: 'rgb(178, 34, 34)',
		hex: '#B22222'
	},
	{
		name: 'firebrick1',
		rgb: 'rgb(255, 48, 48)',
		hex: '#FF3030'
	},
	{
		name: 'firebrick2',
		rgb: 'rgb(238, 44, 44)',
		hex: '#EE2C2C'
	},
	{
		name: 'firebrick3',
		rgb: 'rgb(205, 38, 38)',
		hex: '#CD2626'
	},
	{
		name: 'firebrick4',
		rgb: 'rgb(139, 26, 26)',
		hex: '#8B1A1A'
	},
	{
		name: 'fractal',
		rgb: 'rgb(128, 128, 128)',
		hex: '#808080'
	},
	{
		name: 'fuchsia',
		rgb: 'rgb(255, 0, 255)',
		hex: '#FF00FF'
	},
	{
		name: 'gainsboro',
		rgb: 'rgb(220, 220, 220)',
		hex: '#DCDCDC'
	},
	{
		name: 'gold',
		rgb: 'rgb(255, 215, 0)',
		hex: '#FFD700'
	},
	{
		name: 'gold1',
		rgb: 'rgb(255, 215, 0)',
		hex: '#FFD700'
	},
	{
		name: 'gold2',
		rgb: 'rgb(238, 201, 0)',
		hex: '#EEC900'
	},
	{
		name: 'gold3',
		rgb: 'rgb(205, 173, 0)',
		hex: '#CDAD00'
	},
	{
		name: 'gold4',
		rgb: 'rgb(139, 117, 0)',
		hex: '#8B7500'
	},
	{
		name: 'goldenrod',
		rgb: 'rgb(218, 165, 32)',
		hex: '#DAA520'
	},
	{
		name: 'goldenrod1',
		rgb: 'rgb(255, 193, 37)',
		hex: '#FFC125'
	},
	{
		name: 'goldenrod2',
		rgb: 'rgb(238, 180, 34)',
		hex: '#EEB422'
	},
	{
		name: 'goldenrod3',
		rgb: 'rgb(205, 155, 29)',
		hex: '#CD9B1D'
	},
	{
		name: 'goldenrod4',
		rgb: 'rgb(139, 105, 20)',
		hex: '#8B6914'
	},
	{
		name: 'gray',
		rgb: 'rgb(126, 126, 126)',
		hex: '#7E7E7E'
	},
	{
		name: 'gray0',
		rgb: 'rgb( 0, 0, 0)',
		hex: '#000000'
	},
	{
		name: 'gray1',
		rgb: 'rgb( 3, 3, 3)',
		hex: '#030303'
	},
	{
		name: 'gray10',
		rgb: 'rgb( 26, 26, 26)',
		hex: '#1A1A1A'
	},
	{
		name: 'gray11',
		rgb: 'rgb( 28, 28, 28)',
		hex: '#1C1C1C'
	},
	{
		name: 'gray12',
		rgb: 'rgb( 31, 31, 31)',
		hex: '#1F1F1F'
	},
	{
		name: 'gray13',
		rgb: 'rgb( 33, 33, 33)',
		hex: '#212121'
	},
	{
		name: 'gray14',
		rgb: 'rgb( 36, 36, 36)',
		hex: '#242424'
	},
	{
		name: 'gray15',
		rgb: 'rgb( 38, 38, 38)',
		hex: '#262626'
	},
	{
		name: 'gray16',
		rgb: 'rgb( 41, 41, 41)',
		hex: '#292929'
	},
	{
		name: 'gray17',
		rgb: 'rgb( 43, 43, 43)',
		hex: '#2B2B2B'
	},
	{
		name: 'gray18',
		rgb: 'rgb( 46, 46, 46)',
		hex: '#2E2E2E'
	},
	{
		name: 'gray19',
		rgb: 'rgb( 48, 48, 48)',
		hex: '#303030'
	},
	{
		name: 'gray2',
		rgb: 'rgb( 5, 5, 5)',
		hex: '#050505'
	},
	{
		name: 'gray20',
		rgb: 'rgb( 51, 51, 51)',
		hex: '#333333'
	},
	{
		name: 'gray21',
		rgb: 'rgb( 54, 54, 54)',
		hex: '#363636'
	},
	{
		name: 'gray22',
		rgb: 'rgb( 56, 56, 56)',
		hex: '#383838'
	},
	{
		name: 'gray23',
		rgb: 'rgb( 59, 59, 59)',
		hex: '#3B3B3B'
	},
	{
		name: 'gray24',
		rgb: 'rgb( 61, 61, 61)',
		hex: '#3D3D3D'
	},
	{
		name: 'gray25',
		rgb: 'rgb( 64, 64, 64)',
		hex: '#404040'
	},
	{
		name: 'gray26',
		rgb: 'rgb( 66, 66, 66)',
		hex: '#424242'
	},
	{
		name: 'gray27',
		rgb: 'rgb( 69, 69, 69)',
		hex: '#454545'
	},
	{
		name: 'gray28',
		rgb: 'rgb( 71, 71, 71)',
		hex: '#474747'
	},
	{
		name: 'gray29',
		rgb: 'rgb( 74, 74, 74)',
		hex: '#4A4A4A'
	},
	{
		name: 'gray3',
		rgb: 'rgb( 8, 8, 8)',
		hex: '#080808'
	},
	{
		name: 'gray30',
		rgb: 'rgb( 77, 77, 77)',
		hex: '#4D4D4D'
	},
	{
		name: 'gray31',
		rgb: 'rgb( 79, 79, 79)',
		hex: '#4F4F4F'
	},
	{
		name: 'gray32',
		rgb: 'rgb( 82, 82, 82)',
		hex: '#525252'
	},
	{
		name: 'gray33',
		rgb: 'rgb( 84, 84, 84)',
		hex: '#545454'
	},
	{
		name: 'gray34',
		rgb: 'rgb( 87, 87, 87)',
		hex: '#575757'
	},
	{
		name: 'gray35',
		rgb: 'rgb( 89, 89, 89)',
		hex: '#595959'
	},
	{
		name: 'gray36',
		rgb: 'rgb( 92, 92, 92)',
		hex: '#5C5C5C'
	},
	{
		name: 'gray37',
		rgb: 'rgb( 94, 94, 94)',
		hex: '#5E5E5E'
	},
	{
		name: 'gray38',
		rgb: 'rgb( 97, 97, 97)',
		hex: '#616161'
	},
	{
		name: 'gray39',
		rgb: 'rgb( 99, 99, 99)',
		hex: '#636363'
	},
	{
		name: 'gray4',
		rgb: 'rgb( 10, 10, 10)',
		hex: '#0A0A0A'
	},
	{
		name: 'gray40',
		rgb: 'rgb(102, 102, 102)',
		hex: '#666666'
	},
	{
		name: 'gray41',
		rgb: 'rgb(105, 105, 105)',
		hex: '#696969'
	},
	{
		name: 'gray42',
		rgb: 'rgb(107, 107, 107)',
		hex: '#6B6B6B'
	},
	{
		name: 'gray43',
		rgb: 'rgb(110, 110, 110)',
		hex: '#6E6E6E'
	},
	{
		name: 'gray44',
		rgb: 'rgb(112, 112, 112)',
		hex: '#707070'
	},
	{
		name: 'gray45',
		rgb: 'rgb(115, 115, 115)',
		hex: '#737373'
	},
	{
		name: 'gray46',
		rgb: 'rgb(117, 117, 117)',
		hex: '#757575'
	},
	{
		name: 'gray47',
		rgb: 'rgb(120, 120, 120)',
		hex: '#787878'
	},
	{
		name: 'gray48',
		rgb: 'rgb(122, 122, 122)',
		hex: '#7A7A7A'
	},
	{
		name: 'gray49',
		rgb: 'rgb(125, 125, 125)',
		hex: '#7D7D7D'
	},
	{
		name: 'gray5',
		rgb: 'rgb( 13, 13, 13)',
		hex: '#0D0D0D'
	},
	{
		name: 'gray50',
		rgb: 'rgb(127, 127, 127)',
		hex: '#7F7F7F'
	},
	{
		name: 'gray51',
		rgb: 'rgb(130, 130, 130)',
		hex: '#828282'
	},
	{
		name: 'gray52',
		rgb: 'rgb(133, 133, 133)',
		hex: '#858585'
	},
	{
		name: 'gray53',
		rgb: 'rgb(135, 135, 135)',
		hex: '#878787'
	},
	{
		name: 'gray54',
		rgb: 'rgb(138, 138, 138)',
		hex: '#8A8A8A'
	},
	{
		name: 'gray55',
		rgb: 'rgb(140, 140, 140)',
		hex: '#8C8C8C'
	},
	{
		name: 'gray56',
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F'
	},
	{
		name: 'gray57',
		rgb: 'rgb(145, 145, 145)',
		hex: '#919191'
	},
	{
		name: 'gray58',
		rgb: 'rgb(148, 148, 148)',
		hex: '#949494'
	},
	{
		name: 'gray59',
		rgb: 'rgb(150, 150, 150)',
		hex: '#969696'
	},
	{
		name: 'gray6',
		rgb: 'rgb( 15, 15, 15)',
		hex: '#0F0F0F'
	},
	{
		name: 'gray60',
		rgb: 'rgb(153, 153, 153)',
		hex: '#999999'
	},
	{
		name: 'gray61',
		rgb: 'rgb(156, 156, 156)',
		hex: '#9C9C9C'
	},
	{
		name: 'gray62',
		rgb: 'rgb(158, 158, 158)',
		hex: '#9E9E9E'
	},
	{
		name: 'gray63',
		rgb: 'rgb(161, 161, 161)',
		hex: '#A1A1A1'
	},
	{
		name: 'gray64',
		rgb: 'rgb(163, 163, 163)',
		hex: '#A3A3A3'
	},
	{
		name: 'gray65',
		rgb: 'rgb(166, 166, 166)',
		hex: '#A6A6A6'
	},
	{
		name: 'gray66',
		rgb: 'rgb(168, 168, 168)',
		hex: '#A8A8A8'
	},
	{
		name: 'gray67',
		rgb: 'rgb(171, 171, 171)',
		hex: '#ABABAB'
	},
	{
		name: 'gray68',
		rgb: 'rgb(173, 173, 173)',
		hex: '#ADADAD'
	},
	{
		name: 'gray69',
		rgb: 'rgb(176, 176, 176)',
		hex: '#B0B0B0'
	},
	{
		name: 'gray7',
		rgb: 'rgb( 18, 18, 18)',
		hex: '#121212'
	},
	{
		name: 'gray70',
		rgb: 'rgb(179, 179, 179)',
		hex: '#B3B3B3'
	},
	{
		name: 'gray71',
		rgb: 'rgb(181, 181, 181)',
		hex: '#B5B5B5'
	},
	{
		name: 'gray72',
		rgb: 'rgb(184, 184, 184)',
		hex: '#B8B8B8'
	},
	{
		name: 'gray73',
		rgb: 'rgb(186, 186, 186)',
		hex: '#BABABA'
	},
	{
		name: 'gray74',
		rgb: 'rgb(189, 189, 189)',
		hex: '#BDBDBD'
	},
	{
		name: 'gray75',
		rgb: 'rgb(191, 191, 191)',
		hex: '#BFBFBF'
	},
	{
		name: 'gray76',
		rgb: 'rgb(194, 194, 194)',
		hex: '#C2C2C2'
	},
	{
		name: 'gray77',
		rgb: 'rgb(196, 196, 196)',
		hex: '#C4C4C4'
	},
	{
		name: 'gray78',
		rgb: 'rgb(199, 199, 199)',
		hex: '#C7C7C7'
	},
	{
		name: 'gray79',
		rgb: 'rgb(201, 201, 201)',
		hex: '#C9C9C9'
	},
	{
		name: 'gray8',
		rgb: 'rgb( 20, 20, 20)',
		hex: '#141414'
	},
	{
		name: 'gray80',
		rgb: 'rgb(204, 204, 204)',
		hex: '#CCCCCC'
	},
	{
		name: 'gray81',
		rgb: 'rgb(207, 207, 207)',
		hex: '#CFCFCF'
	},
	{
		name: 'gray82',
		rgb: 'rgb(209, 209, 209)',
		hex: '#D1D1D1'
	},
	{
		name: 'gray83',
		rgb: 'rgb(212, 212, 212)',
		hex: '#D4D4D4'
	},
	{
		name: 'gray84',
		rgb: 'rgb(214, 214, 214)',
		hex: '#D6D6D6'
	},
	{
		name: 'gray85',
		rgb: 'rgb(217, 217, 217)',
		hex: '#D9D9D9'
	},
	{
		name: 'gray86',
		rgb: 'rgb(219, 219, 219)',
		hex: '#DBDBDB'
	},
	{
		name: 'gray87',
		rgb: 'rgb(222, 222, 222)',
		hex: '#DEDEDE'
	},
	{
		name: 'gray88',
		rgb: 'rgb(224, 224, 224)',
		hex: '#E0E0E0'
	},
	{
		name: 'gray89',
		rgb: 'rgb(227, 227, 227)',
		hex: '#E3E3E3'
	},
	{
		name: 'gray9',
		rgb: 'rgb( 23, 23, 23)',
		hex: '#171717'
	},
	{
		name: 'gray90',
		rgb: 'rgb(229, 229, 229)',
		hex: '#E5E5E5'
	},
	{
		name: 'gray91',
		rgb: 'rgb(232, 232, 232)',
		hex: '#E8E8E8'
	},
	{
		name: 'gray92',
		rgb: 'rgb(235, 235, 235)',
		hex: '#EBEBEB'
	},
	{
		name: 'gray93',
		rgb: 'rgb(237, 237, 237)',
		hex: '#EDEDED'
	},
	{
		name: 'gray94',
		rgb: 'rgb(240, 240, 240)',
		hex: '#F0F0F0'
	},
	{
		name: 'gray95',
		rgb: 'rgb(242, 242, 242)',
		hex: '#F2F2F2'
	},
	{
		name: 'gray96',
		rgb: 'rgb(245, 245, 245)',
		hex: '#F5F5F5'
	},
	{
		name: 'gray97',
		rgb: 'rgb(247, 247, 247)',
		hex: '#F7F7F7'
	},
	{
		name: 'gray98',
		rgb: 'rgb(250, 250, 250)',
		hex: '#FAFAFA'
	},
	{
		name: 'gray99',
		rgb: 'rgb(252, 252, 252)',
		hex: '#FCFCFC'
	},
	{
		name: 'green',
		rgb: 'rgb( 0, 128, 0)',
		hex: '#008000'
	},
	{
		name: 'green1',
		rgb: 'rgb( 0, 255, 0)',
		hex: '#00FF00'
	},
	{
		name: 'green2',
		rgb: 'rgb( 0, 238, 0)',
		hex: '#00EE00'
	},
	{
		name: 'green3',
		rgb: 'rgb( 0, 205, 0)',
		hex: '#00CD00'
	},
	{
		name: 'green4',
		rgb: 'rgb( 0, 139, 0)',
		hex: '#008B00'
	},
	{
		name: 'grey0',
		rgb: 'rgb( 0, 0, 0)',
		hex: '#000000'
	},
	{
		name: 'grey1',
		rgb: 'rgb( 3, 3, 3)',
		hex: '#030303'
	},
	{
		name: 'grey10',
		rgb: 'rgb( 26, 26, 26)',
		hex: '#1A1A1A'
	},
	{
		name: 'grey11',
		rgb: 'rgb( 28, 28, 28)',
		hex: '#1C1C1C'
	},
	{
		name: 'grey12',
		rgb: 'rgb( 31, 31, 31)',
		hex: '#1F1F1F'
	},
	{
		name: 'grey13',
		rgb: 'rgb( 33, 33, 33)',
		hex: '#212121'
	},
	{
		name: 'grey14',
		rgb: 'rgb( 36, 36, 36)',
		hex: '#242424'
	},
	{
		name: 'grey15',
		rgb: 'rgb( 38, 38, 38)',
		hex: '#262626'
	},
	{
		name: 'grey16',
		rgb: 'rgb( 41, 41, 41)',
		hex: '#292929'
	},
	{
		name: 'grey17',
		rgb: 'rgb( 43, 43, 43)',
		hex: '#2B2B2B'
	},
	{
		name: 'grey18',
		rgb: 'rgb( 46, 46, 46)',
		hex: '#2E2E2E'
	},
	{
		name: 'grey19',
		rgb: 'rgb( 48, 48, 48)',
		hex: '#303030'
	},
	{
		name: 'grey2',
		rgb: 'rgb( 5, 5, 5)',
		hex: '#050505'
	},
	{
		name: 'grey20',
		rgb: 'rgb( 51, 51, 51)',
		hex: '#333333'
	},
	{
		name: 'grey21',
		rgb: 'rgb( 54, 54, 54)',
		hex: '#363636'
	},
	{
		name: 'grey22',
		rgb: 'rgb( 56, 56, 56)',
		hex: '#383838'
	},
	{
		name: 'grey23',
		rgb: 'rgb( 59, 59, 59)',
		hex: '#3B3B3B'
	},
	{
		name: 'grey24',
		rgb: 'rgb( 61, 61, 61)',
		hex: '#3D3D3D'
	},
	{
		name: 'grey25',
		rgb: 'rgb( 64, 64, 64)',
		hex: '#404040'
	},
	{
		name: 'grey26',
		rgb: 'rgb( 66, 66, 66)',
		hex: '#424242'
	},
	{
		name: 'grey27',
		rgb: 'rgb( 69, 69, 69)',
		hex: '#454545'
	},
	{
		name: 'grey28',
		rgb: 'rgb( 71, 71, 71)',
		hex: '#474747'
	},
	{
		name: 'grey29',
		rgb: 'rgb( 74, 74, 74)',
		hex: '#4A4A4A'
	},
	{
		name: 'grey3',
		rgb: 'rgb( 8, 8, 8)',
		hex: '#080808'
	},
	{
		name: 'grey30',
		rgb: 'rgb( 77, 77, 77)',
		hex: '#4D4D4D'
	},
	{
		name: 'grey31',
		rgb: 'rgb( 79, 79, 79)',
		hex: '#4F4F4F'
	},
	{
		name: 'grey32',
		rgb: 'rgb( 82, 82, 82)',
		hex: '#525252'
	},
	{
		name: 'grey33',
		rgb: 'rgb( 84, 84, 84)',
		hex: '#545454'
	},
	{
		name: 'grey34',
		rgb: 'rgb( 87, 87, 87)',
		hex: '#575757'
	},
	{
		name: 'grey35',
		rgb: 'rgb( 89, 89, 89)',
		hex: '#595959'
	},
	{
		name: 'grey36',
		rgb: 'rgb( 92, 92, 92)',
		hex: '#5C5C5C'
	},
	{
		name: 'grey37',
		rgb: 'rgb( 94, 94, 94)',
		hex: '#5E5E5E'
	},
	{
		name: 'grey38',
		rgb: 'rgb( 97, 97, 97)',
		hex: '#616161'
	},
	{
		name: 'grey39',
		rgb: 'rgb( 99, 99, 99)',
		hex: '#636363'
	},
	{
		name: 'grey4',
		rgb: 'rgb( 10, 10, 10)',
		hex: '#0A0A0A'
	},
	{
		name: 'grey40',
		rgb: 'rgb(102, 102, 102)',
		hex: '#666666'
	},
	{
		name: 'grey41',
		rgb: 'rgb(105, 105, 105)',
		hex: '#696969'
	},
	{
		name: 'grey42',
		rgb: 'rgb(107, 107, 107)',
		hex: '#6B6B6B'
	},
	{
		name: 'grey43',
		rgb: 'rgb(110, 110, 110)',
		hex: '#6E6E6E'
	},
	{
		name: 'grey44',
		rgb: 'rgb(112, 112, 112)',
		hex: '#707070'
	},
	{
		name: 'grey45',
		rgb: 'rgb(115, 115, 115)',
		hex: '#737373'
	},
	{
		name: 'grey46',
		rgb: 'rgb(117, 117, 117)',
		hex: '#757575'
	},
	{
		name: 'grey47',
		rgb: 'rgb(120, 120, 120)',
		hex: '#787878'
	},
	{
		name: 'grey48',
		rgb: 'rgb(122, 122, 122)',
		hex: '#7A7A7A'
	},
	{
		name: 'grey49',
		rgb: 'rgb(125, 125, 125)',
		hex: '#7D7D7D'
	},
	{
		name: 'grey5',
		rgb: 'rgb( 13, 13, 13)',
		hex: '#0D0D0D'
	},
	{
		name: 'grey50',
		rgb: 'rgb(127, 127, 127)',
		hex: '#7F7F7F'
	},
	{
		name: 'grey51',
		rgb: 'rgb(130, 130, 130)',
		hex: '#828282'
	},
	{
		name: 'grey52',
		rgb: 'rgb(133, 133, 133)',
		hex: '#858585'
	},
	{
		name: 'grey53',
		rgb: 'rgb(135, 135, 135)',
		hex: '#878787'
	},
	{
		name: 'grey54',
		rgb: 'rgb(138, 138, 138)',
		hex: '#8A8A8A'
	},
	{
		name: 'grey55',
		rgb: 'rgb(140, 140, 140)',
		hex: '#8C8C8C'
	},
	{
		name: 'grey56',
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F'
	},
	{
		name: 'grey57',
		rgb: 'rgb(145, 145, 145)',
		hex: '#919191'
	},
	{
		name: 'grey58',
		rgb: 'rgb(148, 148, 148)',
		hex: '#949494'
	},
	{
		name: 'grey59',
		rgb: 'rgb(150, 150, 150)',
		hex: '#969696'
	},
	{
		name: 'grey6',
		rgb: 'rgb( 15, 15, 15)',
		hex: '#0F0F0F'
	},
	{
		name: 'grey60',
		rgb: 'rgb(153, 153, 153)',
		hex: '#999999'
	},
	{
		name: 'grey61',
		rgb: 'rgb(156, 156, 156)',
		hex: '#9C9C9C'
	},
	{
		name: 'grey62',
		rgb: 'rgb(158, 158, 158)',
		hex: '#9E9E9E'
	},
	{
		name: 'grey63',
		rgb: 'rgb(161, 161, 161)',
		hex: '#A1A1A1'
	},
	{
		name: 'grey64',
		rgb: 'rgb(163, 163, 163)',
		hex: '#A3A3A3'
	},
	{
		name: 'grey65',
		rgb: 'rgb(166, 166, 166)',
		hex: '#A6A6A6'
	},
	{
		name: 'grey66',
		rgb: 'rgb(168, 168, 168)',
		hex: '#A8A8A8'
	},
	{
		name: 'grey67',
		rgb: 'rgb(171, 171, 171)',
		hex: '#ABABAB'
	},
	{
		name: 'grey68',
		rgb: 'rgb(173, 173, 173)',
		hex: '#ADADAD'
	},
	{
		name: 'grey69',
		rgb: 'rgb(176, 176, 176)',
		hex: '#B0B0B0'
	},
	{
		name: 'grey7',
		rgb: 'rgb( 18, 18, 18)',
		hex: '#121212'
	},
	{
		name: 'grey70',
		rgb: 'rgb(179, 179, 179)',
		hex: '#B3B3B3'
	},
	{
		name: 'grey71',
		rgb: 'rgb(181, 181, 181)',
		hex: '#B5B5B5'
	},
	{
		name: 'grey72',
		rgb: 'rgb(184, 184, 184)',
		hex: '#B8B8B8'
	},
	{
		name: 'grey73',
		rgb: 'rgb(186, 186, 186)',
		hex: '#BABABA'
	},
	{
		name: 'grey74',
		rgb: 'rgb(189, 189, 189)',
		hex: '#BDBDBD'
	},
	{
		name: 'grey75',
		rgb: 'rgb(191, 191, 191)',
		hex: '#BFBFBF'
	},
	{
		name: 'grey76',
		rgb: 'rgb(194, 194, 194)',
		hex: '#C2C2C2'
	},
	{
		name: 'grey77',
		rgb: 'rgb(196, 196, 196)',
		hex: '#C4C4C4'
	},
	{
		name: 'grey78',
		rgb: 'rgb(199, 199, 199)',
		hex: '#C7C7C7'
	},
	{
		name: 'grey79',
		rgb: 'rgb(201, 201, 201)',
		hex: '#C9C9C9'
	},
	{
		name: 'grey8',
		rgb: 'rgb( 20, 20, 20)',
		hex: '#141414'
	},
	{
		name: 'grey80',
		rgb: 'rgb(204, 204, 204)',
		hex: '#CCCCCC'
	},
	{
		name: 'grey81',
		rgb: 'rgb(207, 207, 207)',
		hex: '#CFCFCF'
	},
	{
		name: 'grey82',
		rgb: 'rgb(209, 209, 209)',
		hex: '#D1D1D1'
	},
	{
		name: 'grey83',
		rgb: 'rgb(212, 212, 212)',
		hex: '#D4D4D4'
	},
	{
		name: 'grey84',
		rgb: 'rgb(214, 214, 214)',
		hex: '#D6D6D6'
	},
	{
		name: 'grey85',
		rgb: 'rgb(217, 217, 217)',
		hex: '#D9D9D9'
	},
	{
		name: 'grey86',
		rgb: 'rgb(219, 219, 219)',
		hex: '#DBDBDB'
	},
	{
		name: 'grey87',
		rgb: 'rgb(222, 222, 222)',
		hex: '#DEDEDE'
	},
	{
		name: 'grey88',
		rgb: 'rgb(224, 224, 224)',
		hex: '#E0E0E0'
	},
	{
		name: 'grey89',
		rgb: 'rgb(227, 227, 227)',
		hex: '#E3E3E3'
	},
	{
		name: 'grey9',
		rgb: 'rgb( 23, 23, 23)',
		hex: '#171717'
	},
	{
		name: 'grey90',
		rgb: 'rgb(229, 229, 229)',
		hex: '#E5E5E5'
	},
	{
		name: 'grey91',
		rgb: 'rgb(232, 232, 232)',
		hex: '#E8E8E8'
	},
	{
		name: 'grey92',
		rgb: 'rgb(235, 235, 235)',
		hex: '#EBEBEB'
	},
	{
		name: 'grey93',
		rgb: 'rgb(237, 237, 237)',
		hex: '#EDEDED'
	},
	{
		name: 'grey94',
		rgb: 'rgb(240, 240, 240)',
		hex: '#F0F0F0'
	},
	{
		name: 'grey95',
		rgb: 'rgb(242, 242, 242)',
		hex: '#F2F2F2'
	},
	{
		name: 'grey96',
		rgb: 'rgb(245, 245, 245)',
		hex: '#F5F5F5'
	},
	{
		name: 'grey97',
		rgb: 'rgb(247, 247, 247)',
		hex: '#F7F7F7'
	},
	{
		name: 'grey98',
		rgb: 'rgb(250, 250, 250)',
		hex: '#FAFAFA'
	},
	{
		name: 'grey99',
		rgb: 'rgb(252, 252, 252)',
		hex: '#FCFCFC'
	},
	{
		name: 'honeydew',
		rgb: 'rgb(240, 255, 240)',
		hex: '#F0FFF0'
	},
	{
		name: 'honeydew1',
		rgb: 'rgb(240, 255, 240)',
		hex: '#F0FFF0'
	},
	{
		name: 'honeydew2',
		rgb: 'rgb(224, 238, 224)',
		hex: '#E0EEE0'
	},
	{
		name: 'honeydew3',
		rgb: 'rgb(193, 205, 193)',
		hex: '#C1CDC1'
	},
	{
		name: 'honeydew4',
		rgb: 'rgb(131, 139, 131)',
		hex: '#838B83'
	},
	{
		name: 'indigo',
		rgb: 'rgb( 75, 0, 130)',
		hex: '#4B0082'
	},
	{
		name: 'ivory',
		rgb: 'rgb(255, 255, 240)',
		hex: '#FFFFF0'
	},
	{
		name: 'ivory1',
		rgb: 'rgb(255, 255, 240)',
		hex: '#FFFFF0'
	},
	{
		name: 'ivory2',
		rgb: 'rgb(238, 238, 224)',
		hex: '#EEEEE0'
	},
	{
		name: 'ivory3',
		rgb: 'rgb(205, 205, 193)',
		hex: '#CDCDC1'
	},
	{
		name: 'ivory4',
		rgb: 'rgb(139, 139, 131)',
		hex: '#8B8B83'
	},
	{
		name: 'khaki',
		rgb: 'rgb(240, 230, 140)',
		hex: '#F0E68C'
	},
	{
		name: 'khaki1',
		rgb: 'rgb(255, 246, 143)',
		hex: '#FFF68F'
	},
	{
		name: 'khaki2',
		rgb: 'rgb(238, 230, 133)',
		hex: '#EEE685'
	},
	{
		name: 'khaki3',
		rgb: 'rgb(205, 198, 115)',
		hex: '#CDC673'
	},
	{
		name: 'khaki4',
		rgb: 'rgb(139, 134, 78)',
		hex: '#8B864E'
	},
	{
		name: 'lavender',
		rgb: 'rgb(230, 230, 250)',
		hex: '#E6E6FA'
	},
	{
		name: 'lime',
		rgb: 'rgb( 0, 255, 0)',
		hex: '#00FF00'
	},
	{
		name: 'linen',
		rgb: 'rgb(250, 240, 230)',
		hex: '#FAF0E6'
	},
	{
		name: 'magenta',
		rgb: 'rgb(255, 0, 255)',
		hex: '#FF00FF'
	},
	{
		name: 'magenta1',
		rgb: 'rgb(255, 0, 255)',
		hex: '#FF00FF'
	},
	{
		name: 'magenta2',
		rgb: 'rgb(238, 0, 238)',
		hex: '#EE00EE'
	},
	{
		name: 'magenta3',
		rgb: 'rgb(205, 0, 205)',
		hex: '#CD00CD'
	},
	{
		name: 'magenta4',
		rgb: 'rgb(139, 0, 139)',
		hex: '#8B008B'
	},
	{
		name: 'maroon',
		rgb: 'rgb(128, 0, 0)',
		hex: '#800000'
	},
	{
		name: 'maroon1',
		rgb: 'rgb(255, 52, 179)',
		hex: '#FF34B3'
	},
	{
		name: 'maroon2',
		rgb: 'rgb(238, 48, 167)',
		hex: '#EE30A7'
	},
	{
		name: 'maroon3',
		rgb: 'rgb(205, 41, 144)',
		hex: '#CD2990'
	},
	{
		name: 'maroon4',
		rgb: 'rgb(139, 28, 98)',
		hex: '#8B1C62'
	},
	{
		name: 'moccasin',
		rgb: 'rgb(255, 228, 181)',
		hex: '#FFE4B5'
	},
	{
		name: 'navy',
		rgb: 'rgb( 0, 0, 128)',
		hex: '#000080'
	},
	{
		name: 'none',
		rgb: 'rgba( 0, 0, 0, 0.0)',
		hex: '#00000000'
	},
	{
		name: 'olive',
		rgb: 'rgb(128, 128, 0)',
		hex: '#808000'
	},
	{
		name: 'opaque',
		rgb: 'rgb( 0, 0, 0)',
		hex: '#000000'
	},
	{
		name: 'orange',
		rgb: 'rgb(255, 165, 0)',
		hex: '#FFA500'
	},
	{
		name: 'orange1',
		rgb: 'rgb(255, 165, 0)',
		hex: '#FFA500'
	},
	{
		name: 'orange2',
		rgb: 'rgb(238, 154, 0)',
		hex: '#EE9A00'
	},
	{
		name: 'orange3',
		rgb: 'rgb(205, 133, 0)',
		hex: '#CD8500'
	},
	{
		name: 'orange4',
		rgb: 'rgb(139, 90, 0)',
		hex: '#8B5A00'
	},
	{
		name: 'orchid',
		rgb: 'rgb(218, 112, 214)',
		hex: '#DA70D6'
	},
	{
		name: 'orchid1',
		rgb: 'rgb(255, 131, 250)',
		hex: '#FF83FA'
	},
	{
		name: 'orchid2',
		rgb: 'rgb(238, 122, 233)',
		hex: '#EE7AE9'
	},
	{
		name: 'orchid3',
		rgb: 'rgb(205, 105, 201)',
		hex: '#CD69C9'
	},
	{
		name: 'orchid4',
		rgb: 'rgb(139, 71, 137)',
		hex: '#8B4789'
	},
	{
		name: 'peru',
		rgb: 'rgb(205, 133, 63)',
		hex: '#CD853F'
	},
	{
		name: 'pink',
		rgb: 'rgb(255, 192, 203)',
		hex: '#FFC0CB'
	},
	{
		name: 'pink1',
		rgb: 'rgb(255, 181, 197)',
		hex: '#FFB5C5'
	},
	{
		name: 'pink2',
		rgb: 'rgb(238, 169, 184)',
		hex: '#EEA9B8'
	},
	{
		name: 'pink3',
		rgb: 'rgb(205, 145, 158)',
		hex: '#CD919E'
	},
	{
		name: 'pink4',
		rgb: 'rgb(139, 99, 108)',
		hex: '#8B636C'
	},
	{
		name: 'plum',
		rgb: 'rgb(221, 160, 221)',
		hex: '#DDA0DD'
	},
	{
		name: 'plum1',
		rgb: 'rgb(255, 187, 255)',
		hex: '#FFBBFF'
	},
	{
		name: 'plum2',
		rgb: 'rgb(238, 174, 238)',
		hex: '#EEAEEE'
	},
	{
		name: 'plum3',
		rgb: 'rgb(205, 150, 205)',
		hex: '#CD96CD'
	},
	{
		name: 'plum4',
		rgb: 'rgb(139, 102, 139)',
		hex: '#8B668B'
	},
	{
		name: 'purple',
		rgb: 'rgb(128, 0, 128)',
		hex: '#800080'
	},
	{
		name: 'purple1',
		rgb: 'rgb(155, 48, 255)',
		hex: '#9B30FF'
	},
	{
		name: 'purple2',
		rgb: 'rgb(145, 44, 238)',
		hex: '#912CEE'
	},
	{
		name: 'purple3',
		rgb: 'rgb(125, 38, 205)',
		hex: '#7D26CD'
	},
	{
		name: 'purple4',
		rgb: 'rgb( 85, 26, 139)',
		hex: '#551A8B'
	},
	{
		name: 'red',
		rgb: 'rgb(255, 0, 0)',
		hex: '#FF0000'
	},
	{
		name: 'red1',
		rgb: 'rgb(255, 0, 0)',
		hex: '#FF0000'
	},
	{
		name: 'red2',
		rgb: 'rgb(238, 0, 0)',
		hex: '#EE0000'
	},
	{
		name: 'red3',
		rgb: 'rgb(205, 0, 0)',
		hex: '#CD0000'
	},
	{
		name: 'red4',
		rgb: 'rgb(139, 0, 0)',
		hex: '#8B0000'
	},
	{
		name: 'salmon',
		rgb: 'rgb(250, 128, 114)',
		hex: '#FA8072'
	},
	{
		name: 'salmon1',
		rgb: 'rgb(255, 140, 105)',
		hex: '#FF8C69'
	},
	{
		name: 'salmon2',
		rgb: 'rgb(238, 130, 98)',
		hex: '#EE8262'
	},
	{
		name: 'salmon3',
		rgb: 'rgb(205, 112, 84)',
		hex: '#CD7054'
	},
	{
		name: 'salmon4',
		rgb: 'rgb(139, 76, 57)',
		hex: '#8B4C39'
	},
	{
		name: 'seashell',
		rgb: 'rgb(255, 245, 238)',
		hex: '#FFF5EE'
	},
	{
		name: 'seashell1',
		rgb: 'rgb(255, 245, 238)',
		hex: '#FFF5EE'
	},
	{
		name: 'seashell2',
		rgb: 'rgb(238, 229, 222)',
		hex: '#EEE5DE'
	},
	{
		name: 'seashell3',
		rgb: 'rgb(205, 197, 191)',
		hex: '#CDC5BF'
	},
	{
		name: 'seashell4',
		rgb: 'rgb(139, 134, 130)',
		hex: '#8B8682'
	},
	{
		name: 'sienna',
		rgb: 'rgb(160, 82, 45)',
		hex: '#A0522D'
	},
	{
		name: 'sienna1',
		rgb: 'rgb(255, 130, 71)',
		hex: '#FF8247'
	},
	{
		name: 'sienna2',
		rgb: 'rgb(238, 121, 66)',
		hex: '#EE7942'
	},
	{
		name: 'sienna3',
		rgb: 'rgb(205, 104, 57)',
		hex: '#CD6839'
	},
	{
		name: 'sienna4',
		rgb: 'rgb(139, 71, 38)',
		hex: '#8B4726'
	},
	{
		name: 'silver',
		rgb: 'rgb(192, 192, 192)',
		hex: '#C0C0C0'
	},
	{
		name: 'snow',
		rgb: 'rgb(255, 250, 250)',
		hex: '#FFFAFA'
	},
	{
		name: 'snow1',
		rgb: 'rgb(255, 250, 250)',
		hex: '#FFFAFA'
	},
	{
		name: 'snow2',
		rgb: 'rgb(238, 233, 233)',
		hex: '#EEE9E9'
	},
	{
		name: 'snow3',
		rgb: 'rgb(205, 201, 201)',
		hex: '#CDC9C9'
	},
	{
		name: 'snow4',
		rgb: 'rgb(139, 137, 137)',
		hex: '#8B8989'
	},
	{
		name: 'tan',
		rgb: 'rgb(210, 180, 140)',
		hex: '#D2B48C'
	},
	{
		name: 'tan1',
		rgb: 'rgb(255, 165, 79)',
		hex: '#FFA54F'
	},
	{
		name: 'tan2',
		rgb: 'rgb(238, 154, 73)',
		hex: '#EE9A49'
	},
	{
		name: 'tan3',
		rgb: 'rgb(205, 133, 63)',
		hex: '#CD853F'
	},
	{
		name: 'tan4',
		rgb: 'rgb(139, 90, 43)',
		hex: '#8B5A2B'
	},
	{
		name: 'teal',
		rgb: 'rgb( 0, 128, 128)',
		hex: '#008080'
	},
	{
		name: 'thistle',
		rgb: 'rgb(216, 191, 216)',
		hex: '#D8BFD8'
	},
	{
		name: 'thistle1',
		rgb: 'rgb(255, 225, 255)',
		hex: '#FFE1FF'
	},
	{
		name: 'thistle2',
		rgb: 'rgb(238, 210, 238)',
		hex: '#EED2EE'
	},
	{
		name: 'thistle3',
		rgb: 'rgb(205, 181, 205)',
		hex: '#CDB5CD'
	},
	{
		name: 'thistle4',
		rgb: 'rgb(139, 123, 139)',
		hex: '#8B7B8B'
	},
	{
		name: 'tomato',
		rgb: 'rgb(255, 99, 71)',
		hex: '#FF6347'
	},
	{
		name: 'tomato1',
		rgb: 'rgb(255, 99, 71)',
		hex: '#FF6347'
	},
	{
		name: 'tomato2',
		rgb: 'rgb(238, 92, 66)',
		hex: '#EE5C42'
	},
	{
		name: 'tomato3',
		rgb: 'rgb(205, 79, 57)',
		hex: '#CD4F39'
	},
	{
		name: 'tomato4',
		rgb: 'rgb(139, 54, 38)',
		hex: '#8B3626'
	},
	{
		name: 'transparent',
		rgb: 'rgba( 0, 0, 0, 0.0)',
		hex: '#00000000'
	},
	{
		name: 'turquoise',
		rgb: 'rgb( 64, 224, 208)',
		hex: '#40E0D0'
	},
	{
		name: 'turquoise1',
		rgb: 'rgb( 0, 245, 255)',
		hex: '#00F5FF'
	},
	{
		name: 'turquoise2',
		rgb: 'rgb( 0, 229, 238)',
		hex: '#00E5EE'
	},
	{
		name: 'turquoise3',
		rgb: 'rgb( 0, 197, 205)',
		hex: '#00C5CD'
	},
	{
		name: 'turquoise4',
		rgb: 'rgb( 0, 134, 139)',
		hex: '#00868B'
	},
	{
		name: 'violet',
		rgb: 'rgb(238, 130, 238)',
		hex: '#EE82EE'
	},
	{
		name: 'wheat',
		rgb: 'rgb(245, 222, 179)',
		hex: '#F5DEB3'
	},
	{
		name: 'wheat1',
		rgb: 'rgb(255, 231, 186)',
		hex: '#FFE7BA'
	},
	{
		name: 'wheat2',
		rgb: 'rgb(238, 216, 174)',
		hex: '#EED8AE'
	},
	{
		name: 'wheat3',
		rgb: 'rgb(205, 186, 150)',
		hex: '#CDBA96'
	},
	{
		name: 'wheat4',
		rgb: 'rgb(139, 126, 102)',
		hex: '#8B7E66'
	},
	{
		name: 'white',
		rgb: 'rgb(255, 255, 255)',
		hex: '#FFFFFF'
	},
	{
		name: 'yellow',
		rgb: 'rgb(255, 255, 0)',
		hex: '#FFFF00'
	},
	{
		name: 'yellow1',
		rgb: 'rgb(255, 255, 0)',
		hex: '#FFFF00'
	},
	{
		name: 'yellow2',
		rgb: 'rgb(238, 238, 0)',
		hex: '#EEEE00'
	},
	{
		name: 'yellow3',
		rgb: 'rgb(205, 205, 0)',
		hex: '#CDCD00'
	},
	{
		name: 'yellow4',
		rgb: 'rgb(139, 139, 0)',
		hex: '#8B8B00'
	}
]

export default colors
