'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular.io-example documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-5a0a38680876ec127aa985a385bfec79eeac6b4595b8eeaee56840522622fbb16b7c7f898cac9d2caf3c2d91f674380eb65c5261d60c02b1b4cc08ea39d300f7"' : 'data-bs-target="#xs-components-links-module-AdminModule-5a0a38680876ec127aa985a385bfec79eeac6b4595b8eeaee56840522622fbb16b7c7f898cac9d2caf3c2d91f674380eb65c5261d60c02b1b4cc08ea39d300f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-5a0a38680876ec127aa985a385bfec79eeac6b4595b8eeaee56840522622fbb16b7c7f898cac9d2caf3c2d91f674380eb65c5261d60c02b1b4cc08ea39d300f7"' :
                                            'id="xs-components-links-module-AdminModule-5a0a38680876ec127aa985a385bfec79eeac6b4595b8eeaee56840522622fbb16b7c7f898cac9d2caf3c2d91f674380eb65c5261d60c02b1b4cc08ea39d300f7"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCrisesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageCrisesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageHeroesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageHeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-306d6ce5b3ac51bc9f6d865a2313bbf189c473f50965b2226d65af585a7b427a1fc18c2a43b0aa8162851afd64ffe2a22531bcb7e7032f65b595c3325d4f7577"' : 'data-bs-target="#xs-components-links-module-AppModule-306d6ce5b3ac51bc9f6d865a2313bbf189c473f50965b2226d65af585a7b427a1fc18c2a43b0aa8162851afd64ffe2a22531bcb7e7032f65b595c3325d4f7577"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-306d6ce5b3ac51bc9f6d865a2313bbf189c473f50965b2226d65af585a7b427a1fc18c2a43b0aa8162851afd64ffe2a22531bcb7e7032f65b595c3325d4f7577"' :
                                            'id="xs-components-links-module-AppModule-306d6ce5b3ac51bc9f6d865a2313bbf189c473f50965b2226d65af585a7b427a1fc18c2a43b0aa8162851afd64ffe2a22531bcb7e7032f65b595c3325d4f7577"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComposeMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComposeMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-53472f85879a90c63b1ccf2202a9475187da0913a1ad008de296ea46dc550a33c27c15413eeb2d1956c33ff288ff94ce9259ae87dc00c55a427be0abe7f378be"' : 'data-bs-target="#xs-components-links-module-AuthModule-53472f85879a90c63b1ccf2202a9475187da0913a1ad008de296ea46dc550a33c27c15413eeb2d1956c33ff288ff94ce9259ae87dc00c55a427be0abe7f378be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-53472f85879a90c63b1ccf2202a9475187da0913a1ad008de296ea46dc550a33c27c15413eeb2d1956c33ff288ff94ce9259ae87dc00c55a427be0abe7f378be"' :
                                            'id="xs-components-links-module-AuthModule-53472f85879a90c63b1ccf2202a9475187da0913a1ad008de296ea46dc550a33c27c15413eeb2d1956c33ff288ff94ce9259ae87dc00c55a427be0abe7f378be"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CrisisCenterModule.html" data-type="entity-link" >CrisisCenterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CrisisCenterModule-95019923cabc2c5355c1152b58c79df28082c526e3f5a65680e0d3ed799a79a32fa0f8a11d018a0f2334004bd535a58a43f6da07f15d086750a2b99d2ca6d2c7"' : 'data-bs-target="#xs-components-links-module-CrisisCenterModule-95019923cabc2c5355c1152b58c79df28082c526e3f5a65680e0d3ed799a79a32fa0f8a11d018a0f2334004bd535a58a43f6da07f15d086750a2b99d2ca6d2c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CrisisCenterModule-95019923cabc2c5355c1152b58c79df28082c526e3f5a65680e0d3ed799a79a32fa0f8a11d018a0f2334004bd535a58a43f6da07f15d086750a2b99d2ca6d2c7"' :
                                            'id="xs-components-links-module-CrisisCenterModule-95019923cabc2c5355c1152b58c79df28082c526e3f5a65680e0d3ed799a79a32fa0f8a11d018a0f2334004bd535a58a43f6da07f15d086750a2b99d2ca6d2c7"' }>
                                            <li class="link">
                                                <a href="components/CrisisCenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrisisCenterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrisisCenterHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrisisCenterHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrisisDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrisisDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrisisListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrisisListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CrisisCenterRoutingModule.html" data-type="entity-link" >CrisisCenterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesModule.html" data-type="entity-link" >HeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeroesModule-ed250972f6c004641d2d7019420e6fbb093969d12678d026fbb2051b5f372e8281c90331aa35f1856ef54ca29c0d68f072b3a6f6c8a4b40c37791344825c4705"' : 'data-bs-target="#xs-components-links-module-HeroesModule-ed250972f6c004641d2d7019420e6fbb093969d12678d026fbb2051b5f372e8281c90331aa35f1856ef54ca29c0d68f072b3a6f6c8a4b40c37791344825c4705"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeroesModule-ed250972f6c004641d2d7019420e6fbb093969d12678d026fbb2051b5f372e8281c90331aa35f1856ef54ca29c0d68f072b3a6f6c8a4b40c37791344825c4705"' :
                                            'id="xs-components-links-module-HeroesModule-ed250972f6c004641d2d7019420e6fbb093969d12678d026fbb2051b5f372e8281c90331aa35f1856ef54ca29c0d68f072b3a6f6c8a4b40c37791344825c4705"' }>
                                            <li class="link">
                                                <a href="components/HeroDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesRoutingModule.html" data-type="entity-link" >HeroesRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrisisService.html" data-type="entity-link" >CrisisService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogService.html" data-type="entity-link" >DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroService.html" data-type="entity-link" >HeroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectivePreloadingStrategyService.html" data-type="entity-link" >SelectivePreloadingStrategyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CanComponentDeactivate.html" data-type="entity-link" >CanComponentDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Crisis.html" data-type="entity-link" >Crisis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});