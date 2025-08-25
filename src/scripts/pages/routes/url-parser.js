function extractPathnameSegments(path) {
  const splitUrl = path.split('/').filter((segment) => segment);
  const segments = {};

  if (splitUrl.length > 0) {
    segments.resource = splitUrl[0];
  } else {
    segments.resource = null;
  }

  if (splitUrl.length > 1) {
    const secondSegment = splitUrl[1];
    const thirdSegment = splitUrl[2];
    const fourthSegment = splitUrl[3];

    if (segments.resource === 'my-class' && secondSegment === 'my') {
      segments.isMyPage = true;
    } else if (secondSegment === 'course' && splitUrl.length > 2) {
      segments.courseSegment = secondSegment;
      segments.moduleId = splitUrl[2];
    } else if (splitUrl.length > 2 && thirdSegment === 'corridor') {
      segments.id = secondSegment;
      segments.corridor = thirdSegment;
    } else if (thirdSegment === 'module' && splitUrl.length > 3) {
      segments.id = secondSegment;
      segments.module = thirdSegment;
      segments.moduleId = splitUrl[3];
    } else {
      segments.id = secondSegment;
    }
  }

  return segments;
}

function constructRouteFromSegments(pathSegments) {
  let pathname = '';

  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }

  if (pathSegments.resource === 'my-class' && pathSegments.isMyPage) {
    return `${pathname}/my`;
  }

  if (
    pathSegments.resource === 'my-class' &&
    pathSegments.courseSegment === 'course' &&
    pathSegments.moduleId
  ) {
    return `${pathname}/course/moduleId`;
  }

  if (pathSegments.id && pathSegments.corridor) {
    return `${pathname}/:id/corridor`;
  }

  if (pathSegments.id && pathSegments.module && pathSegments.moduleId) {
    return `${pathname}/:id/module/:moduleId`;
  }
  if (pathSegments.id) {
    pathname = pathname.concat('/:id');
  }

  return pathname || '/';
}

export function getActivePathname() {
  return location.hash.replace('#', '') || '/';
}

export function getActiveRoute() {
  const pathname = getActivePathname();
  const urlSegments = extractPathnameSegments(pathname);
  return constructRouteFromSegments(urlSegments);
}

export function parseActivePathname() {
  const pathname = getActivePathname();
  return extractPathnameSegments(pathname);
}

export function getRoute(pathname) {
  const urlSegments = extractPathnameSegments(pathname);
  return constructRouteFromSegments(urlSegments);
}

export function parsePathname(pathname) {
  return extractPathnameSegments(pathname);
}
