//           ,
//        .-/c-.,::  "Rubber side down!" - ShutterRev
//        (_)'==(_)
//
//Array of markers, accessed via advMarkers variable
var advMarkers = [];
advMarkers.push(L.marker([33.0601755, -116.4249009], {icon: L.AwesomeMarkers.icon({icon: 'campground', prefix: 'fa', markerColor: 'gray', spin:false}) }).bindPopup("<b>Stagecoach:</b><br>Camping, Trails<br>ADV Rally Location<br><a target='_blank' href='https://goo.gl/maps/DjoeNMiFjVht1BNKA'>Google Maps</a>"),
L.marker([33.109576, -116.672355], {icon: L.AwesomeMarkers.icon({icon: 'gas-pump', prefix: 'fa', markerColor: 'gray', spin:false}) }).bindPopup("<b>The Chairs:</b><br>Gas Station<br>popular warehouse stop<br><a target='_blank' href='https://goo.gl/maps/e5EQj5hFFKrvSQrk6'>Google Maps</a>"),
L.marker([32.837706, -117.134908], {icon: L.AwesomeMarkers.icon({icon: 'warehouse', prefix: 'fa', markerColor: 'black', spin:false}) }).bindPopup("<b>BMWMCSD:</b><br>BMW warehouses San Deigo<br><a target='_blank' href='https://goo.gl/maps/Ha9UfZS7C8CiqnFz9'>Google Maps</a>"),
L.marker([33.016743, -116.635005], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Boulder Creek</b><br>Engineers & Boulder Creek<br><a target='_blank' href='https://goo.gl/maps/bnrzrH7uoW2m8Eyo7'>Google Maps</a>"),
L.marker([33.119769, -116.788734], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Black Canyon Rd:</b><br>From Sutherland Dam Rd.<br><a target='_blank' href='https://goo.gl/maps/KeKoXXh9JCmzBAWH7'>Google Maps</a>"),
L.marker([33.180646, -116.769653], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Black Canyon Rd:</b><br>From Mesa Grande<br><a target='_blank' href='https://goo.gl/maps/K7ZUsinn8zjL9U6EA'>Google Maps</a>"),
L.marker([32.866074, -116.633179], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Boulder Creek Rd:</b><br>Paved for a few miles<br><a target='_blank' href='https://goo.gl/maps/ud4o2YjesXhCCr8n8'>Google Maps</a>"),
L.marker([33.065540, -116.872821], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Black Canyon:</b><br>To Ramona<br><a target='_blank' href='https://goo.gl/maps/BvN7ffBwQggE1CRL9'>Google Maps</a>"),
L.marker([33.070367, -116.845314], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Black Canyon:</b><br>Downhill direction<br><a target='_blank' href='https://goo.gl/maps/kVJtfwxZquPCULgJ8'>Google Maps</a>"),
L.marker([33.065923, -116.858786], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Pamo Rd:</b><br>Flat dirt rd.<br>Gated access to Forest Rd<br><a target='_blank' href='https://goo.gl/maps/UoHWu536RpfxL3wi7'>Google Maps</a>"),
L.marker([33.140461, -116.850069], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Forest Rd:</b><br>Forest Rd enter to truck trails<br><a target='_blank' href='https://goo.gl/maps/27XdFbQgn2GMkzap9'>Google Maps</a>"),
L.marker([33.124074, -116.801913], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>12S07:</b><br>Forest Rte 12S07 East entrance<br><a target='_blank' href='https://goo.gl/maps/sviDVQMWyJbxQRzv7'>Google Maps</a>"),
L.marker([33.135196, -116.838528], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Dirt Vista:</b><br>Vista Point from Forest Rd<br><a target='_blank' href='https://goo.gl/maps/zYh1FEnb2r8Ayqpu6'>Google Maps</a>"),
L.marker([33.156968, -116.809342], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Piney Top:</b><br>Vista Point / Camping<br><a target='_blank' href='https://goo.gl/maps/v7UHCR27Bb1LNpkdA'>Google Maps</a>"),
L.marker([33.4404, -116.8571], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Palomar:</b><br>HighPoint Truck Trail<br>Turn from 79<br><a target='_blank' href='https://goo.gl/maps/zB2HLuGqhPQThH7DA'>Google Maps</a>"),
L.marker([33.363, -116.8364], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Palomar:</b><br>HighPoint Lookout/Tower<br><a target='_blank' href='https://goo.gl/maps/WDunrJVkhdQM4mHRA'>Google Maps</a>"),
L.marker([33.3308, -116.7092], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Palomar:</b><br>Palomar Divide Exit<br><a target='_blank' href='https://goo.gl/maps/Ksp4q1EjZCPgQfex5'>Google Maps</a>"),  
L.marker([33.2864, -116.6603], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Lost Valley:</b><br>Lost Valley motorcyclet<br>Paved till Indian Flats<br><a target='_blank' href='https://goo.gl/maps/4dKybrXd973KxR5QA'>Google Maps</a>"),
L.marker([33.3488, -116.6597], {icon: L.AwesomeMarkers.icon({icon: 'campground', prefix: 'fa', markerColor: 'gray', spin:false}) }).bindPopup("<b>Lost Valley</b><br>Indian Flats, Campground<br><a target='_blank' href='https://goo.gl/maps/JM3fQYQ1qJj8W5An6'>Google Maps</a>"),
L.marker([33.497, -116.6804], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Lost Valley</b><br>To/From Anza<br><a target='_blank' href='https://goo.gl/maps/ac5yxFZ46X44MN7n9'>Google Maps</a>"), 
L.marker([33.128683, -116.425791], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Grapevine Canyon</b><br>Common way to get to Grapevine<br><a target='_blank' href='https://goo.gl/maps/pU38f36W7QjyGk1L8'>Google Maps</a>"),
L.marker([33.136730, -116.379257], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Yaqui Wells</b><br>Access to Grapevine Canyon<br><a target='_blank' href='https://goo.gl/maps/42nGqv2BsB7KTXp68'>Google Maps</a>"),
L.marker([33.212578, -116.564800], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Grapevine Canyon</b><br>Exit to S22<br><a target='_blank' href='https://goo.gl/maps/qcfM7vEouvqmv6MVA'>Google Maps</a>"), 
L.marker([33.303365, -116.239026], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Font's Point</b><br><b>Sand</b>!!!! Enter From S22<br><a target='_blank' href='https://goo.gl/maps/AYjBkkRC49bEFQgv6'>Google Maps</a>"),
L.marker([33.257839, -116.233396], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Font's Point</b><br><b>Sand</b>!!!! Turnaround<br><a target='_blank' href='https://goo.gl/maps/iDicTTv8AyKQefGd6'>Google Maps</a>"), 
L.marker([33.123590, -117.104884], {icon: L.AwesomeMarkers.icon({icon: 'warehouse', prefix: 'fa', markerColor: 'black', spin:false}) }).bindPopup("<b>Moto Forza</b><br>Ducati/Husky Dealer<br><a target='_blank' href='https://goo.gl/maps/qYvYxKnsP7sJPben8'>Google Maps</a>"), 
L.marker([33.315916, -116.990470], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Nate Harrison</b><br>From 76<br><a target='_blank' href='https://goo.gl/maps/KUeZMbBAkhsDryme8'>Google Maps</a>"),
L.marker([33.332473, -116.910013], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Nate Harrison</b><br>Access to/from Palomar Mtn Area<br><a target='_blank' href='https://goo.gl/maps/ogX7BMc6MJVPNqtq6'>Google Maps</a>"),
L.marker([33.038199, -116.875139], {icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'gray', spin:false}) }).bindPopup("<b>Dunkin Ramona</b><br>I mean... It's not starbucks<br><a target='_blank' href='https://goo.gl/maps/DrbSwKLPi2ZpjaEM7'>Google Maps</a>"),
L.marker([33.543463, -116.735667], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Red Mtn.</b><br>Access to/from 371<br><a target='_blank' href='https://goo.gl/maps/NSfnsJmZ5YxE1a5JA'>Google Maps</a>"),
L.marker([33.587101, -116.753114], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Red Mtn.</b><br>To/From Tripp Flats Rd.<br><a target='_blank' href='https://goo.gl/maps/YvCLbVx4n4iVueFS8'>Google Maps</a>"),
L.marker([33.630166, -116.847829], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Red Mtn.</b><br>Lookout Tower<br><a target='_blank' href='https://goo.gl/maps/H3HQGapQLXdkJDJf9'>Google Maps</a>"),
L.marker([32.741078, -117.179177], {icon: L.AwesomeMarkers.icon({icon: 'warehouse', prefix: 'fa', markerColor: 'black', spin:false}) }).bindPopup("<b>GP Cycles</b><br>Duc/KTM Dealer<br><a target='_blank' href='https://goo.gl/maps/dqErD9XX5YU3cWyw8'>Google Maps</a>"),
L.marker([33.119596, -117.102446], {icon: L.AwesomeMarkers.icon({icon: 'warehouse', prefix: 'fa', markerColor: 'black', spin:false}) }).bindPopup("<b>BMW Escondido</b><br>BMW warehouses Escondido<br><a target='_blank' href='https://goo.gl/maps/HoywKuSX3D91RwtL7'>Google Maps</a>"),
L.marker([32.9847, -116.6772], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Cedar Creek Rd.</b><br>To/from Eagle Peak<br><a target='_blank' href='https://goo.gl/maps/mjteUZygCftThbVT8'>Google Maps</a>"),
L.marker([33.0023, -116.7152], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Eagle Peak</b><br>To/from Cedar Creek Rd.<br><a target='_blank' href='https://goo.gl/maps/EGbwyPGnC14p8Mad6'>Google Maps</a>"),
L.marker([33.0484, -116.6363], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Eagle Peak</b><br>To/from Boulder Creek Rd.<br><a target='_blank' href='https://goo.gl/maps/goDUzJQTeXKyPNdi8'>Google Maps</a>"),
L.marker([33.2101, -116.4528], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Old Culp Valley Rd.</b><br>Intersects Grapevine Canyon<br><a target='_blank' href='https://goo.gl/maps/tHNaEBmotLSqsEFE6'>Google Maps</a>"),
L.marker([33.1639, -116.5108], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'orange', spin:false}) }).bindPopup("<b>Grapevine Canyon</b><br>Turn for Old Culp Valley Rd.<br><a target='_blank' href='https://goo.gl/maps/aLjuULL4pdBYYFfM9'>Google Maps</a>"),
L.marker([32.8382, -116.5376], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Pine Creek</b><br>To/From old HWY80<br><a target='_blank' href='https://goo.gl/maps/9MB9uyADGDQavzer8'>Google Maps</a>"),
L.marker([32.8942, -116.5051], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'green', spin:false}) }).bindPopup("<b>Pine Creek</b><br>Dirt Turnout & White Gate<br><a target='_blank' href='https://goo.gl/maps/3B12C5NpfYXdJ2GZ9'>Google Maps</a>"),
L.marker([33.314333, -116.865386], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'gray', spin:false}) }).bindPopup("<b>Mother's Kitchen</b><br>Popular warehouse spot<br><a target='_blank' href='https://goo.gl/maps/j1FqQYcFTpWVv25M8'>Google Maps</a>"),
L.marker([33.056821, -116.421324], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Pinyon Mtn. Trail</b><br>Enter from S2<br><a target='_blank' href='https://goo.gl/maps/8Y9ckPVrTeVbZMq2A'>Google Maps</a>"),
L.marker([33.049477, -116.311765], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Pinyon Mtn. Trail</b><br>The Squeeze<br><a target='_blank' href='https://goo.gl/maps/aywaU9NAhrVLxp7s9'>Google Maps</a>"),
L.marker([33.050507, -116.303412], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Pinyon Mtn. Trail</b><br>The Steps<br><a target='_blank' href='https://goo.gl/maps/bHF815Qte8KL8AEN8'>Google Maps</a>"),
L.marker([33.049062, -116.300127], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Pinyon Mtn. Trail</b><br>The Drop<br><a target='_blank' href='https://goo.gl/maps/DnMFYhjDpLeBBUyP9'>Google Maps</a>"),
L.marker([33.0312, -116.2400], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Fish Creek Wash</b><br>From Hapaha Flat Rd.<br><a target='_blank' href='https://goo.gl/maps/qjcYsUpVqH9AgEyt7'>Google Maps</a>"),
L.marker([33.0544, -116.2876], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Hapaha Flat Rd.</b><br>To Fish Creek Wash<br><b>Sand</b>!!!!<br><a target='_blank' href='https://goo.gl/maps/j8KR7zDrCar6HTfY6'>Google Maps</a>"),
L.marker([32.9877, -116.2202], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Fish Creek Wash</b><br>Stay on Fish Creek Wash<br><b>Sand</b>!!!!<br><a target='_blank' href='https://goo.gl/maps/ESRb5JJH15VdcPMeA'>Google Maps</a>"),
L.marker([32.9604, -116.1785], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Red', spin:false}) }).bindPopup("<b>Fish Creek Wash</b><br>Stay on Fish Creek Wash<br><b>Sand</b>!!!!<br><a target='_blank' href='https://goo.gl/maps/GvbMTUhK9ndCRGwC6'>Google Maps</a>"),
L.marker([32.9926, -116.1185], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Fish Creek Wash</b><br>Near Wind Caves<br><a target='_blank' href='https://goo.gl/maps/YBm6NS6zR6NtCsWc8'>Google Maps</a>"),
L.marker([33.0396, -116.0968], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Green', spin:false}) }).bindPopup("<b>Fish Creek Wash</b><br>To Split Mountain Rd.<br><a target='_blank' href='https://goo.gl/maps/iiNwam4v7pu4yRQo9'>Google Maps</a>"),
L.marker([33.440780, -116.512077], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Bailey's Cabin</b><br>Turnaround Point.<br><a target='_blank' href='https://goo.gl/maps/u4QvFrPkyUpgQoUp6'>Google Maps</a>"),
L.marker([33.499085, -116.600580], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Coyote Canyon Rd.</b><br>To Bailey's Cabin<br><a target='_blank' href='https://goo.gl/maps/CUkeJFwYwBBVWfAy5'>Google Maps</a>"),
L.marker([33.591575, -116.619367], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Thomas Mtn. Truck Trail</b><br>Thomas Mtn. motorcyclet E.<br><a target='_blank' href='https://goo.gl/maps/GkS24ZyC8XVyaNJk9'>Google Maps</a>"),
L.marker([33.730636, -116.830416], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Rouse Hill Truck Trail</b><br>To/From Thomas Mtn to E.<br><a target='_blank' href='https://goo.gl/maps/hJ5QAZXfAuY3dEs46'>Google Maps</a>"),
L.marker([33.737168, -116.824873], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Bee Canyon Truck Trail</b><br>From the 74<br><a target='_blank' href='https://goo.gl/maps/4NyA2CZs8pkcx7CQ6'>Google Maps</a>"),
L.marker([33.835983, -116.807023], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Orange', spin:false}) }).bindPopup("<b>Forest Rte. 4S05</b><br>from 243, Links through to Bee Canyon TT<br><a target='_blank' href='https://goo.gl/maps/bqpzn5q43JnLSP3G9'>Google Maps</a>"),
L.marker([32.652496, -116.855164], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Green', spin:false}) }).bindPopup("<b>Otay Mesa Truck Trail</b><br>Near Pico Pico<br><a target='_blank' href='https://goo.gl/maps/ZwRSRM6Hfrfvbi579'>Google Maps</a>"),
L.marker([32.600690, -116.770462], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Green', spin:false}) }).bindPopup("<b>Otay Mesa Truck Trail</b><br>To/From Engineer Springs<br><a target='_blank' href='https://goo.gl/maps/fQNvx4W1mUXsaR2MA'>Google Maps</a>"),
L.marker([33.208212, -116.981986], {icon: L.AwesomeMarkers.icon({icon: 'store', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Bates Nut Farm</b><br>To/From Woods Valley Rd.<br><a target='_blank' href='https://goo.gl/maps/neL5WDXuLPZbY9bt7'>Google Maps</a>"),
L.marker([33.094551, -116.646202], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Wynola Pizza</b><br>To/From 78<br><a target='_blank' href='https://goo.gl/maps/cRwC154qbjBK5z9g9'>Google Maps</a>"),
L.marker([33.255679, -116.373831], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Red Ocotillo</b><br>Borrego Springs<br><a target='_blank' href='https://goo.gl/maps/1ZfxSRWiNmVAWCTXA'>Google Maps</a>"),
L.marker([32.862155, -116.420131], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Pine House Cafe</b><br>Sunrise Highway<br><a target='_blank' href='https://goo.gl/maps/UTNZCmXS45Ytyyw49'>Google Maps</a>"),
L.marker([33.7348148, -116.735256], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Mile High Cafe</b><br>To/From The 243<br><a target='_blank' href='https://goo.gl/maps/dkhFwvw9aq3tq91Q6'>Google Maps</a>"),
L.marker([32.716573, -116.500293], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Green', spin:false}) }).bindPopup("<b>Corral Canyon OHV</b><br>Turnout from Buckman Springs Rd.<br><a target='_blank' href='https://goo.gl/maps/mS2oRfAaBM7hyQcPA'>Google Maps</a>"),
L.marker([32.6282933,-116.4721463], {icon: L.AwesomeMarkers.icon({icon: 'gas-pump', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Campo/Buckman</b><br>Gas, Store, Food.<br><a target='_blank' href='https://goo.gl/maps/uiaqwEHxz5RdAcgF9'>Google Maps</a>"),
L.marker([32.7248513,-116.5590969], {icon: L.AwesomeMarkers.icon({icon: 'motorcycle', prefix: 'fa', markerColor: 'Green', spin:false}) }).bindPopup("<b>Corral Canyon OHV</b><br>Large dirt lot with toilets<br><a target='_blank' href='https://goo.gl/maps/Sm8iSFEzsN2eSw9H6'>Google Maps</a>"),
L.marker([33.569026,-116.5913671], {icon: L.AwesomeMarkers.icon({icon: 'utensils', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Paradise Valley Cafe</b><br>371 & 74<br><a target='_blank' href='https://goo.gl/maps/YFb3vPfKoz6A1aQM7'>Google Maps</a>"),
L.marker([33.5629625,-117.0322018], {icon: L.AwesomeMarkers.icon({icon: 'wine-glass-alt', prefix: 'fa', markerColor: 'Gray', spin:false}) }).bindPopup("<b>Moto Doffo Winery</b><br>Motorcycle themed winery<br><a target='_blank' href='https://goo.gl/maps/UR4rxnmxy3iDdiCn9'>Google Maps</a>"));

//advMarkers array is now a layergroup named markers.
var markers = L.layerGroup(advMarkers);

//Esri World Streetmap data layernamed Esri_WorldStreetMap.
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'});

//Open StreetMap data layer named osm. 
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

//Google streetmap data layer named googleStreets.
var googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

//Googly hybrid imagery/markup data layer named googleHybrid.
var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

//Map layers, accessed with baseMaps. 
var baseMaps = {
    "Google Streets": googleStreets,
    "Esri StreetMap": Esri_WorldStreetMap,
    "Google Hybrid": googleHybrid,
    "OpenStreetMap": osm
};

//Overlays accessed with overlayMaps.
var overlayMaps = {
    "Markers": markers
};

//Initializing the leaflet map
window.onload = function() {
L.control.scale();
var map = L.map('map', {
    center: [33.180646, -116.769653],
    zoom: 10,
    layers: [googleStreets, markers]
});

//Display user approximate location on map as a blue marker with accuracy radiius.
map.locate({setView: false});
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng, {icon: L.AwesomeMarkers.icon({icon: 'user', prefix: 'fa', markerColor: 'blue', spin:false}) }).addTo(map)   
        .bindPopup("User Position<br>(<i>within " + Math.round(radius * 100) / 100 + "m</i>)").openPopup();
    if (radius < 1000) {
        L.circle(e.latlng, radius, {
		    color: 'red',
		    weight: '.25'}).addTo(map)};
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

//Adds dynamic scale in lower left
L.control.scale().addTo(map);

//Adds map/layer selection in (default) upper right
L.control.layers(baseMaps, overlayMaps).addTo(map);

//On-click for popup labels, and user initiated Lat/Long touches. 
var popup = L.popup();
  function onMapClick(e) {
      popup.setLatLng(e.latlng)
          .setContent("<b>LAT(Y):</b> " + e.latlng.lat.toFixed(4) + "<br>" + "<b>LONG(X):</b> " + e.latlng.lng.toFixed(4))
          .openOn(map);
    }
  map.on('click', onMapClick);
}