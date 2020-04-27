pl.c.setUpGUI = function () {
    pl.v.createClass.setupUserInterface()
    pl.v.editClass.setupUserInterface()
    pl.v.deleteClass.setupUserInterface()
    pl.v.createEdge.setupUserInterface()
    pl.v.clearAll.setupUserInterface()
    pl.v.exportSVG.setupUserInterface()
    pl.v.exportPNG.setupUserInterface()
    pl.v.retrieveAndListAllClasses.updateView()
    pl.v.export.setupUserInterface()
    pl.v.load.setupUserInterface();
}

