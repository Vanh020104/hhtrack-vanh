/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.events=tribe.events||{},tribe.events.views=tribe.events.views||{},tribe.events.views.multidayEventsPro={},function($,obj){"use strict";var $document=$(document);obj.selectorPrefixes={week:".tribe-events-pro-week-grid__"},obj.handleAfterMultidayEventsInitAllowedViews=function(event,$container){var allowedViews=$container.data("tribeEventsMultidayEventsAllowedViews");allowedViews.push("week"),$container.data("tribeEventsMultidayEventsAllowedViews",allowedViews),tribe.events.views.multidayEvents.selectorPrefixes.week=obj.selectorPrefixes.week},obj.ready=function(){$document.on("afterMultidayEventsInitAllowedViews.tribeEvents",tribe.events.views.manager.selectors.container,obj.handleAfterMultidayEventsInitAllowedViews)},$(obj.ready)}(jQuery,tribe.events.views.multidayEventsPro);