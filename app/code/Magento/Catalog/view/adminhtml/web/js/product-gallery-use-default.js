/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    return function (params, inputSelector) {
        var overlay = $(params.overlaySelector);

        $(inputSelector).on('change', function (event) {
            if ($(event.target).prop('checked')) {
                $('input.ven-product-gallery-use-default').val(1);
                overlay.show();
            } else {
                $('input.ven-product-gallery-use-default').val(0);
                overlay.hide();
            }
        });

        $(inputSelector).triggerHandler('change');
    };
});

