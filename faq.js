'use strict';
var categories = document.getElementById('categories');

var state = [];
var titles = [];
var info = ['<ul id="subcategories"><li><a href="http://www.pscleanair.org/Pages/default.aspx">Puget Sound Clean Air Agency</a><p>Puget Sound Clean Air Agency offers disposal services for furnaces, furnace parts, ducting, or boilers.</p></li></ul>','<ul id="subcategories"><li><a href="http://your.kingcounty.gov/solidwaste/ecoconsumer/threadcycle.asp">Thread Cycle Program</a><p>There are links to local businesses that are a part of the Thread Cycle Program who are accepting donations of bedding, linens, and used apparel.</p></li></ul>', '<ul id="subcategories"><li><a href="http://bikeworks.org/">Bike Works</a></li><li><a href="http://www.recycledcycles.com/">Recycled Cycles</a><p>Bike Works and Recycled Cycles are community minded bike shops accepting bikes and bike parts donations.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.recovery1.com/">Recovery 1</a><p>Recovery 1, Inc. offers recycling services for construction/demolition debris for the Tacoma area.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.corkforest.org/">Cork Reharvest Program</a><p>Corks can also be recycled through the Cork ReHarvest Program. Drop boxes are available at PCC, Whole Foods Markets, and Wine World Warehouse locations.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.call2recycle.org/">Call2Recycle</a><p>Call2Recycle offers drop-off locations for recycling used batteries and cellphones.</p></li><li><a href="http://ecoencore.org/">Eco Encore</a><p>Eco Encore accepts donations of used books, CDS, and DVDS. They resell donated items online to promote reuse and donate proceeds to their eco partners.</p></li><li><a href="http://www.ecyclewashington.org/">E-Cycle Washington</a><p>"E-Cycle Washington is a free program that provides responsible recycling of computers (including laptop and "tablet" PCs), monitors, TVs, portable DVD players and e-readers in our state.</p><p>Recycling is provided free of charge to households, small businesses, school districts, small governments and charities at authorized collection sites." -E-Cycle Washington</p></li><li><a href="http://www.greendisk.com/">Green Disk</a><p>Green Disk accepts all computer-related waste, spent supplies and obsolete accessories.</p></li><li><a href="http://your.kingcounty.gov/solidwaste/takeitback/electronics/">Take it Back Network</a><p>"Take it Back Network recyclers accept a variety of electronic equipment such as computers, monitors, printers, TVs, cell phones, PDAs, fax machines, audio video and camera equipment (including DVD and VCR players), household electronics and rechargeable batteries." - Take it Back Network</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.spaarange.com/">Seattle Police Athletic Association</a><p>Both Seattle and King County residents may take small residential fireworks to the Seattle Police Firing Range at 11030 E. Marginal Way S., Wednesday-Sunday, 9:00 a.m. to 5:00 p.m., (206) 684-7470. For disposal of unwanted firworks and ammunition call (206) 625-5011 (the Seattle police non-emergency line) for disposal help.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.donateseattle.org/">Donate Seattle</a><p>Donate Seattle accepts drop offs of your clothing, shoes, books, artwork, jewelry, and housewares at any of their locations during open business hours. Large appliances and furniture are also accepted.</p></li><li><a href="http://your.kingcounty.gov/solidwaste/wdidw/index.asp">King County Website</a><p>King County\'s website offers a listing of businesses that will recycle used items that the county\'s recycling centers cannot process. This includes items such as appliances, electronics, furniture, batteries, and construction/demolition debris.</p></li><li><a href="http://www.seattle.gov/util/MyServices/Garbage/DumpTransferStation/index.htm">Seattle Transfer Stations</a><p>Seattle\'s transfer stations operate from 8:00 a.m. to 5:30 p.m., 7 days per week and are closed Thanksgiving Day, Christmas Day, and New Year\'s Day. Materials they accept include: recyclables, garbage, clean yard waste, clean wood waste, vehicle tires, large appliances, and household sharps.</p><p>A wide range of items-including tires, scrap metal, and vehicle batteries are also accepted at their facilities. Regular household garbage and many larger items are accepted for disposal. Please note that they charge a fee for their services. Payments can be made with cash, check, Visa or mastercard -- checks must be made payable to "City of Seattle, Dept of Finance". Please have valid ID on hand.</p></li><li><a href="https://www.republicservices.com/locations/washington">Republic Services</a><p>Republic services serve residential, municipal,  commercial, and industrial customers nationwide.They offer dependable solutions for all potential recycling and waste challenges.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.lionsclubs.org/EN/how-we-serve/health/sight/eyeglass-recycling.php">The Lions Club</a><p>The Lions Club collects used glasses; the lenses are reground and given to people in need. Glasses can be sent by mail or dropped off in a drop off box at listed locations from their website.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.hazwastehelp.org/HHW/motor-oil.aspx">Hazardous Waste Help</a><p>Hazardous Waste Help lists locations in Washington State capable of disposing of used motor oil.</p></li><li><a href="http://www.seattle.gov/util/MyServices/Garbage/SpecialorHazardousItems/HouseholdHazardousWaste/WheretoDisposeofHazardousWaste/index.htm">Seattle Hazardous Waste Facilities</a><p>Seattle\'s household hazardous waste facilities can dispose of Hazardous household materials and products like fluorescent light bulbs and tubes, oil-based paint and cleaning products can be taken to the region\'s Household Hazardous Waste Facilities. There is no fee. Operation hours are 9 a.m. to 4:30 p.m., Monday through Friday, excluding holidays. </p></li></ul>', '<ul id="subcategories"><li><a href="http://www.takebackyourmeds.org/">Take Back Your Meds</a><p>Take Back Your Meds is a site dedicated to helping people dispose of their unwanted medications.</p></li></ul>', '<ul id="subcategories"><li><a href="http://www.lightrecycle.org/">Light Recycle</a><p>Light Recycle has multiple drop off locations for accepting lights for recycling.</p></li></ul>'];

function handleClick(event) {
  var id = parseInt(event.target.getAttribute('id'));
  if (state[id] === 'hidden') {
    titles[id] = event.target.textContent;
    event.target.innerHTML = event.target.textContent + info[id];
    state[id] = 'shown';
  } else if (state[id] === 'shown') {
    event.target.innerHTML = titles[id];
    state[id] = 'hidden';
  }
}

function initializeHelperArrays() {
  for (var i = 0; i < info.length; i++) {
    state.push('hidden');
    titles.push('');
  }
}

initializeHelperArrays();
categories.addEventListener('click', handleClick);