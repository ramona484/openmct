/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2018, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([
    './bignumbers'
], function (
    Bignumbers
) {
    return function plugin() {
        return function install(openmct) {
            openmct.objectViews.addProvider(new Bignumbers(openmct));

            openmct.types.addType('bignumbers', {
                name: "Big Numbers",
                creatable: true,
                description: "Display the value of a telemetry element with units in a stylized numeric view.",
                cssClass: 'icon-telemetry',
                initialize(domainObject) {
                    domainObject.composition = [];
                    domainObject.configuration = {
                        units: ''
                    };
                },
                form: [
                    {
                        name: "Units",
                        control: "textfield",
                        cssClass: "",
                        key: "units",
                        property: [
                            "configuration",
                            "units"
                        ]
                    }
                ]
            });
        };
    };
});